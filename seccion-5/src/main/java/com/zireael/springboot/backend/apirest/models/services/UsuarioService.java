package com.zireael.springboot.backend.apirest.models.services;

import com.zireael.springboot.backend.apirest.models.dao.IUsuarioDao;
import com.zireael.springboot.backend.apirest.models.entity.Usuario;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UsuarioService implements UserDetailsService, IUsuarioService {
    // Interface para login de usuario. Se utiliza siempre, aunque se implementen interfaces propias.
    private Logger logger = LoggerFactory.getLogger(UsuarioService.class);

    @Autowired
    private IUsuarioDao usuarioDao;

    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Usuario usuario = usuarioDao.findByUsername(username);

        if(usuario == null) {
            logger.error("No existe el usuario en la base de datos.");
            throw new UsernameNotFoundException("No existe el usuario en la base de datos.");
        }

        // Retorna un User Details (usuario de Spring Security).
        List<GrantedAuthority> authorities = usuario.getRoles()
                .stream() // No es asíncrono. No es reactivo.
                .map(role -> new SimpleGrantedAuthority(role.getNombre()))
                .peek(authority -> logger.info(authority.getAuthority()))
                .collect(Collectors.toList());

        return new User(usuario.getUsername(), usuario.getPassword(), usuario.getEnabled(), true, true, true, authorities);
    }

    @Override
    @Transactional(readOnly = true)
    public Usuario findByUsername(String username) {
        return usuarioDao.findByUsername(username);
    }

}
