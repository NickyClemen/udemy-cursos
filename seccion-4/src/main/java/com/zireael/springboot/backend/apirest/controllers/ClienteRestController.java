package com.zireael.springboot.backend.apirest.controllers;

import com.zireael.springboot.backend.apirest.models.entity.Cliente;
import com.zireael.springboot.backend.apirest.models.services.IClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:4200"}) // Implementa CORS.
@RestController
@RequestMapping("/api") // Genera el endpoint.
public class ClienteRestController {
    @Autowired // Inyecta servicios.
    private IClienteService clienteService;

    @GetMapping("/clientes")
    public List<Cliente> index() {
        return clienteService.findAll();
    }
}
