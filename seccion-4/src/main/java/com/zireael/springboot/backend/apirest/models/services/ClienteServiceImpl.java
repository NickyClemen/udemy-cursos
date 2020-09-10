package com.zireael.springboot.backend.apirest.models.services;

import com.zireael.springboot.backend.apirest.models.dao.IClienteDao;
import com.zireael.springboot.backend.apirest.models.entity.Cliente;
import org.springframework.beans.factory.annotation.Autowired;
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
}
