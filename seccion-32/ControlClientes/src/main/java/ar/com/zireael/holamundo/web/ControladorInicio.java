package ar.com.zireael.holamundo.web;

import ar.com.zireael.holamundo.domain.Persona;
import ar.com.zireael.holamundo.services.PersonaService;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import javax.validation.Valid;

@Controller
@Slf4j
public class ControladorInicio {
    @Autowired // Inyecta la dependencia.
    private PersonaService personaService;

    @GetMapping("/")
    public String inicio(Model model, @AuthenticationPrincipal User user) {
        var personas = personaService.listaPersonas();

        log.info("Ejecutando el controlador SpringMVC.");
        log.info("Usuario conectado " + user);

        model.addAttribute("personas", personas);
        return "index";
    } /* @AuthenticationPrincipal: Muestra el usuario que está authenticado. */

    @GetMapping("/agregar")
    public String agregar(Persona persona) {
        return "modificar";
    }

    @PostMapping("/guardar")
    public String guardar(@Valid Persona persona, Errors errors) { // @Valid para avisar que el parámetro está sujeto a validaciones.
        if(errors.hasErrors()) {
            return "modificar";
        }

        personaService.guardar(persona);
        return "redirect:/"; // Redireccionamiento.
    }

    @GetMapping("/editar/{idPersona}")
    public String editar(Persona persona, Model model) {
        persona = personaService.encontrarPersona(persona);
        model.addAttribute("persona", persona);
        return "modificar";
    }

    @GetMapping("/eliminar")
    public String eliminar(Persona persona) {
        personaService.eliminar(persona);
        return "redirect:/";
    }
}
