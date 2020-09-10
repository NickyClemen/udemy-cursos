package ar.com.zireael.holamundo.web;

import ar.com.zireael.holamundo.dao.IPersonaDao;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@Slf4j
public class ControladorInicio {
    @Autowired // Inyecta la dependencia.
    private IPersonaDao personaDao;

    @GetMapping("/")
    public String inicio(Model model) {
        var personas = personaDao.findAll();

        log.info("Ejecutando el controlador SpringMVC.");
        model.addAttribute("personas", personas);
        return "index";
    }
}
