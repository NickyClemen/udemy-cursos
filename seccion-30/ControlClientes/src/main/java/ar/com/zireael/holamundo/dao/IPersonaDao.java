package ar.com.zireael.holamundo.dao;

import ar.com.zireael.holamundo.domain.Persona;
import org.springframework.data.repository.CrudRepository;

// Se le pasa el tipo de dato y la pirmary key.
public interface IPersonaDao extends CrudRepository<Persona, Long> {
    // Se pueden agregar métodos custom.
}
