package ar.com.zireael.holamundo;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model; /* Sirve para armar un modelo de la información que se quiere compartir
con la vista. */
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Controller /* Desplegar información en una vista. Tipo MVC. Muy parecido a RESTController.
La ventaja está en que, por más que use servlets, no que que instanciar ninguna clase.

spring.main.banner-mode=off -> Recorta información de la consola.
index.hola=Hola desde application.properties -> Setea un mensaje.

Principio de Hollywood: No me llames, yo te voy a llamar (clase superior llama a las inferiores). */
@Slf4j // Para mandar información al login.
public class ControladorInicio {

    @Value("${index.saludo}")
    private String saludo;

    // Para que se muestre, hay que mapearlo con un path. Responde a localhost:8080.
    @GetMapping("/")
    public String inicio(Model model) {
        String mensaje = "Hola mundo con Thymeleaf";
        Persona nicole = new Persona();
        Persona cirilla = new Persona();

        nicole.setNombre("Nicole");
        nicole.setApellido("Ordoqui");
        nicole.setEmail("nicole.ordoqui@gmail.com");
        nicole.setTelefono("1170002448");

        cirilla.setNombre("Cirilla");
        cirilla.setApellido("Rusch");
        cirilla.setEmail("cirilla.rusch@gmail.com");
        cirilla.setTelefono("1170002448");

        /* List<Persona> personas = new ArrayList();
        personas.add(nicole);
        personas.add(cirilla); */

        List<Persona> arrayPersona = Arrays.asList(nicole, cirilla);

        // List<Persona> arrayPersona = new ArrayList();

        model.addAttribute("mensaje", mensaje); /* Model es un map. Inyección de dependencias. */
        model.addAttribute("saludo", this.saludo);
        model.addAttribute("nicole", nicole);
        model.addAttribute("cirilla", cirilla);
        model.addAttribute("personas", arrayPersona);

        log.info("Ejecutando el controlador SpringMVC."); // Por default, está habilitado a nivel info.
        return "index"; // El archivo tiene que tener el mismo nombre.
    }
    /* Thymeleaf, por default, usa HTML. Hace caché automático de la información que se le pasa al browser.
    spring.thymeleaf.cache=false -> Deshabilita el caché. */

    // Parámetros de la base de datos: ?zeroDateTimeBehavior=convertToNull&useSSL=false&useTimezone=true&serverTimezone=UTC
}
