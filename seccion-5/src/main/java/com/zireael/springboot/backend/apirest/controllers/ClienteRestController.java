package com.zireael.springboot.backend.apirest.controllers;

import com.zireael.springboot.backend.apirest.models.entity.Cliente;
import com.zireael.springboot.backend.apirest.models.entity.Region;
import com.zireael.springboot.backend.apirest.models.services.IClienteService;

import com.zireael.springboot.backend.apirest.models.services.UploadFileServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.dao.DataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;


import java.io.IOException;
import java.net.MalformedURLException;
import java.util.*;

import java.util.stream.Collectors;

@CrossOrigin(origins = {"http://localhost:4200"}) // Implementa CORS.
@RestController
@RequestMapping("/api") // Genera el endpoint.
public class ClienteRestController {
    @Autowired // Inyecta servicios.
    private IClienteService clienteService;

    @Autowired
    private UploadFileServiceImpl uploadFileService;

    @GetMapping("/clientes")
    public List<Cliente> index() {
        return clienteService.findAll();
    }

    @GetMapping("/clientes/page/{page}")
    public Page<Cliente> index(@PathVariable Integer page) {
        Pageable pageable = PageRequest.of(page, 4);
        return clienteService.findAll(pageable);
    }

    @Secured({"ROLE_ADMIN", "ROLE_USER"})
    @GetMapping("/clientes/{id}")
    // @ResponseStatus(HttpStatus.OK) Por default.
    public ResponseEntity<?> show(@PathVariable Long id) {
        Cliente cliente = null;
        Map<String, Object> response = new HashMap<>(); // Map de errores.

        try {
            cliente = clienteService.findById(id);
        } catch(DataAccessException e) {
            response.put("mensaje", "Ha ocurrido un error inesperado durante la consulta a base de datos");
            response.put("error", e.getMessage().concat(". ").concat(e.getMostSpecificCause().getMessage()));

            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        if(cliente == null) {
            response.put("mensaje", "El cliente ID ".concat(id.toString().concat(" no existe.")));

            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Cliente>(cliente, HttpStatus.OK);
    } // @PathVariable: Indica que es una variable de una URL.

    @Secured("ROLE_ADMIN")
    @PostMapping("/clientes")
    public ResponseEntity<?> create(@Valid @RequestBody Cliente cliente, BindingResult result) {
        /* @Valid es un interceptor del objeto para validar el request body.
        BindingResult: Se inyecta el objeto que tiene todos los mensajes de error. */
        Cliente newClient = null;
        Map<String, Object> response = new HashMap<>();

        if(result.hasErrors()) {
            /* List<String> errors = new ArrayList<>();

            for(FieldError err: result.getFieldErrors()) {
                errors.add("El campo '" + err.getField() + "' " + err.getDefaultMessage());
            } */

            // A partir de JDK 8.
            List<String> errors = result.getFieldErrors()
                    .stream() // Convierte el array list en un stream.
                    .map(err -> "El campo '" + err.getField() + "' " + err.getDefaultMessage())
                    .collect(Collectors.toList());

            response.put("errors", errors);
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.BAD_REQUEST);
        }

        try {
            newClient = clienteService.save(cliente);
        } catch(DataAccessException e) {
            response.put("mensaje", "Ha ocurrido un error inesperado durante la creación del cliente en base de datos");
            response.put("error", e.getMessage().concat(". ").concat(e.getMostSpecificCause().getMessage()));

            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        response.put("mensaje", "El cliente ha sido creado con éxito");
        response.put("cliente", newClient);

        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);  // Sirve para un insert y un update.
    } // @RequestBody: Por la respuesta en formato JSON.

    @Secured("ROLE_ADMIN")
    @PutMapping("/clientes/{id}")
    public ResponseEntity<?> update(@Valid @RequestBody Cliente cliente, BindingResult result, @PathVariable Long id) {
        // @ResponseBody: Envío de respuesta en formato JSON.
        Cliente clienteActual = clienteService.findById(id);
        Cliente clienteUpdated = null;

        Map<String, Object> response = new HashMap<>();

        if(result.hasErrors()) {
            List<String> errors = result.getFieldErrors()
                    .stream() // Convierte el array list en un stream.
                    .map(err -> "El campo '" + err.getField() + "' " + err.getDefaultMessage())
                    .collect(Collectors.toList());

            response.put("errors", errors);
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.BAD_REQUEST);
        }

        if(cliente == null) {
            response.put("mensaje", "El cliente ID ".concat(id.toString().concat(" no se puede editar, ya que no existe.")));

            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
        }

        try {
            clienteActual.setApellido(cliente.getApellido());
            clienteActual.setNombre(cliente.getNombre());
            clienteActual.setEmail(cliente.getEmail());
            clienteActual.setCreateAt(cliente.getCreateAt());
            clienteActual.setRegion(cliente.getRegion());

            clienteUpdated = clienteService.save(clienteActual);
        } catch(DataAccessException e) {
            response.put("mensaje", "Ha ocurrido un error inesperado durante la actualización del cliente en base de datos");
            response.put("error", e.getMessage().concat(". ").concat(e.getMostSpecificCause().getMessage()));

            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        response.put("mensaje", "El cliente ha sido editado con éxito");
        response.put("cliente", clienteUpdated);

        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);
    }

    @Secured("ROLE_ADMIN")
    @DeleteMapping("/clientes/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public ResponseEntity<?> delete(@PathVariable Long id) {
        Map<String, Object> response = new HashMap<>();

        try {
            Cliente cliente = clienteService.findById(id);
            String nombreFotoAnterior = cliente.getFoto();

            uploadFileService.eliminar(nombreFotoAnterior);

            clienteService.delete(id);
        } catch(DataAccessException e) {
            response.put("mensaje", "Ha ocurrido un error inesperado durante la eliminación del cliente en base de datos");
            response.put("error", e.getMessage().concat(". ").concat(e.getMostSpecificCause().getMessage()));

            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        response.put("mensaje", "El cliente ha sido eliminado con éxito.");

        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
    }

    @Secured({"ROLE_ADMIN", "ROLE_USER"})
    @PostMapping("clientes/upload")
    public ResponseEntity<?> upload(@RequestParam("archivo") MultipartFile archivo, @RequestParam("id") Long id) {
        Map<String, Object> response = new HashMap<>();
        Cliente cliente = clienteService.findById(id);
        String nombreFotoAnterior = null;

        if(!archivo.isEmpty()) {
            // String nombreArchivo =  UUID.randomUUID().toString() + "_" + archivo.getOriginalFilename().replace(" ", "");
            String nombreArchivo = null;

            try {
                nombreArchivo = uploadFileService.copiar(archivo);
            } catch (IOException e) {
                response.put("mensaje", "Ha ocurrido un error al subir la imagen");
                response.put("error", e.getMessage().concat(". ").concat(e.getCause().getMessage()));

                return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
            }

            nombreFotoAnterior = cliente.getFoto();

            uploadFileService.eliminar(nombreFotoAnterior);

            cliente.setFoto(nombreArchivo);

            clienteService.save(cliente);

            response.put("cliente", cliente);
            response.put("mensaje", "La imagen " + nombreArchivo + " ha sido subida correctamente.");
        }

        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);
    } /* Para poder subir imágenes, hay que hacerlo con FormData (datos de formulario) que soporte Multiplart (varios
    tipos de archivos). */

    @GetMapping("/uploads/img/{nombreFoto:.+}")
    public ResponseEntity<Resource> verFoto(@PathVariable String nombreFoto) {
        HttpHeaders cabecera = new HttpHeaders();
        Resource recurso = null;

        try {
            recurso = uploadFileService.cargar(nombreFoto);
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }

        cabecera.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + recurso.getFilename() + "\""); // Fuerza la descarga del archivo.

        return new ResponseEntity<Resource>(recurso, cabecera, HttpStatus.OK);
    }

    @Secured("ROLE_ADMIN")
    @GetMapping("/clientes/regiones")
    public List<Region> listarRegiones() {
        return clienteService.findAllRegiones();
    }
}
