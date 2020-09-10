package com.zireael.springboot.backend.apirest.models.dao;

import com.zireael.springboot.backend.apirest.models.entity.Cliente;
import com.zireael.springboot.backend.apirest.models.entity.Region;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IClienteDao extends JpaRepository<Cliente, Long> {
    // Clase a la que está asociada, y tipo de dato de la primary key.
    // Trae todos los métodos de CRUD. Se pueden crear métodos custom.
    // Se puede hacer una clase DAO aparte.
    @Query("from Region") // Personaliza los select.
    public List<Region> findAllRegiones();
}
