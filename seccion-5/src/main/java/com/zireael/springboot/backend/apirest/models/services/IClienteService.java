package com.zireael.springboot.backend.apirest.models.services;

import com.zireael.springboot.backend.apirest.models.entity.Cliente;
import com.zireael.springboot.backend.apirest.models.entity.Region;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IClienteService {
    public List<Cliente> findAll();
    public Page<Cliente> findAll(Pageable pageable); // Page es como List, pero con rangos.
    public Cliente findById(Long id);
    public Cliente save(Cliente cliente);
    public void delete(Long id);
    public List<Region> findAllRegiones();
}