package com.zireael.springboot.backend.apirest.models.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@Service
public class UploadFileServiceImpl implements IUploadFileService {
    private final Logger log = LoggerFactory.getLogger(UploadFileServiceImpl.class);
    private final static String DIRECTORIO_UPLOAD = "uploads";

    @Override
    public Resource cargar(String nombreFoto) throws MalformedURLException {
        Path rutaArchivo = getPath(nombreFoto);
        Resource recurso = new UrlResource(rutaArchivo.toUri());

        log.info(rutaArchivo.toString());

        if(!recurso.exists() && !recurso.isReadable()) {
            rutaArchivo = Paths.get("src/main/resources/static/img").resolve("not_user.png").toAbsolutePath();
            recurso = new UrlResource(rutaArchivo.toUri());
            log.error("No se puedo cargar la imagen.");
        }

        return recurso;
    }

    @Override
    public String copiar(MultipartFile archivo) throws IOException {
        String nombreArchivo =  UUID.randomUUID().toString() + "_" + archivo.getOriginalFilename().replace(" ", "");
        Path rutaArchivo = getPath(nombreArchivo);

        log.info(rutaArchivo.toString());

        Files.copy(archivo.getInputStream(), rutaArchivo);

        return nombreArchivo;
    }

    @Override
    public boolean eliminar(String nombreFoto) {
        if(nombreFoto != null && nombreFoto.length() > 0) {
            Path rutaFotoAnterior = getPath(nombreFoto);
            File archivoFotoAnterior = rutaFotoAnterior.toFile();

            if(archivoFotoAnterior.exists() && archivoFotoAnterior.canRead()) {
                archivoFotoAnterior.delete();
                return true;
            }
        }
        return false;
    }

    @Override
    public Path getPath(String nombreFoto) {
        return Paths.get(DIRECTORIO_UPLOAD).resolve(nombreFoto).toAbsolutePath(); // Concatenar nombre del archivo con el path.
    }
}
