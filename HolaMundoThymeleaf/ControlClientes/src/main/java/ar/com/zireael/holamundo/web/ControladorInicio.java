package ar.com.zireael.holamundo.web;

import ar.com.zireael.holamundo.services.PersonaService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@Slf4j
public class ControladorInicio {
    @Autowired // Inyecta la dependencia.
    private PersonaService personaService;

    @GetMapping("/")
    public String inicio(Model model) {
        var personas = personaService.listaPersonas();

        log.info("Ejecutando el controlador SpringMVC.");
        model.addAttribute("personas", personas);
        return "index";
    }
}
