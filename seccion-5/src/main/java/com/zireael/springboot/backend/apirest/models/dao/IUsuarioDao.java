package com.zireael.springboot.backend.apirest.models.dao;

import com.zireael.springboot.backend.apirest.models.entity.Usuario;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface IUsuarioDao extends CrudRepository<Usuario, Long> {
    // Implementar consulta por nombre del método.
    public Usuario findByUsername(String username);
    // find: Select; by: where; parámetros: Nombres de los atributos. Se agregan por 'and'.

    /* @Query("SELECT user FROM Usuario user WHERE user.username=?1")
    public Usuario findByUser(String username);*/
    // '?1' indica que se reemplaza por el parámetro.

}
