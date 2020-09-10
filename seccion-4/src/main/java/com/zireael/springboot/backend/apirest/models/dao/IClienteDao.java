package com.zireael.springboot.backend.apirest.models.dao;

import com.zireael.springboot.backend.apirest.models.entity.Cliente;
import org.springframework.data.repository.CrudRepository;

public interface IClienteDao extends CrudRepository <Cliente, Long> {
    // Clase a la que está asociada, y tipo de dato de la primary key.
    // Trae todos los métodos de CRUD. Se pueden crear métodos custom.

}
