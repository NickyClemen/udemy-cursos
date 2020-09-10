package ar.com.zireael.holamundo;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController // Para que Spring lo reconozca.
@Slf4j // Para mandar información al login.
public class ControladorInicio {
    // Para que se muestre, hay que mapearlo con un path. Responde a localhost:8080.
    @GetMapping("/")
    public String inicio() {
        log.info("Ejecutando el controlador REST."); // Por default, está habilitado a nivel info.
        log.debug("Más detalle del controlador.");
        return "Hola mundo con Spring Boot.";
    }
    /* En la carpeta target -> classes -> application.properties. Archivo de configuración de Spring. Por default, está
    vacío.
    server.port=9090 -> Cambia port por default.
    logging.level.root=DEBUG -> Envía demasiada información. Queda por default en INFO.
    logging.level.[package name] -> Cambia el nivel del paquete.
    logging.pattern.dateformat=hh:mm -> Fromato de fecha. */
}
