package com.zireael.springboot.backend.apirest.models.services;

import com.zireael.springboot.backend.apirest.models.dao.IClienteDao;
import com.zireael.springboot.backend.apirest.models.entity.Cliente;
import com.zireael.springboot.backend.apirest.models.entity.Region;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service // La cataloga como clase de servicio.
public class ClienteServiceImpl implements IClienteService {
    @Autowired
    private IClienteDao clienteDao;

    @Override
    @Transactional(readOnly = true)
    public List<Cliente> findAll() {
        return (List<Cliente>) clienteDao.findAll(); // Retorna un iterable, por lo que hay que hacer un cast.
    } /* Los métodos del CRUD ya son transaccionales, pero es recomendarle poner el decorator para sobreescribir. */

    @Override
    @Transactional(readOnly = true)
    public Page<Cliente> findAll(Pageable pageable) {
        return clienteDao.findAll(pageable);
    }

    @Override
    @Transactional(readOnly = true)
    public Cliente findById(Long id) {
        return clienteDao.findById(id).orElse(null); // Optional permite controlar el resultado.
    }

    @Override
    @Transactional
    public Cliente save(Cliente cliente) {
        return clienteDao.save(cliente); // Retorna la entidad en la base de datos.
    }

    @Override
    @Transactional
    public void delete(Long id) {
        clienteDao.deleteById(id);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Region> findAllRegiones() {
        return clienteDao.findAllRegiones();
    }
}
