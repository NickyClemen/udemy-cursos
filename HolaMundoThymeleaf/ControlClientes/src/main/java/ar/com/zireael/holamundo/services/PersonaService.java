package ar.com.zireael.holamundo.services;

import ar.com.zireael.holamundo.dao.IPersonaDao;
import ar.com.zireael.holamundo.domain.Persona;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service // Para nombrar la clase como la implementación de un servicio.
public class PersonaService implements IPersonaService {
    @Autowired
    private IPersonaDao personaDao;
    /* Dentro de DAO (Data Object Access), se manejan transacciones. En operaciones con la database, en caso
    de error, se hace un roll back. Si es exitoso, se hace un commit. Se pueden utilizar varios object de tipo
    DAO en el mismo servicio. Depende del tipo de método, se marca la transacción. */

    @Override
    @Transactional(readOnly = true) // Leer.
    public List<Persona> listaPersonas() {
        return (List<Persona>) personaDao.findAll();
    }

    @Override
    @Transactional // No hay que especificar parámetros porque interactúa con la base de datos. Hace roll back o commit.
    public void guardar(Persona persona) {
        personaDao.save(persona);
    }

    // Participa de una transacción si es necesario.
    @Override
    @Transactional
    public void eliminar(Persona persona) {
        personaDao.delete(persona);
    }

    @Override
    @Transactional(readOnly = true)
    public Persona encontrarPersona(Persona persona) {
        return personaDao.findById(persona.getIdPersona()).orElse(null);
        /* findbyId regresa un tipo Optional. Básicamente, hay que decidir qué se hace con el valor de retorno.
        Se puede retornar null o un error. */
    }
}
