package ar.com.zireael.holamundo.dao;

import ar.com.zireael.holamundo.domain.Usuarios;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUsuarioDao extends JpaRepository<Usuarios, Long> {
    Usuarios findByUsername(String username);
}
