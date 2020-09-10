package jdbc;

import jdbc.data.PersonaJDBC;
import jdbc.data.UsuarioJDBC;
import jdbc.domain.Persona;
import jdbc.domain.Usuario;

import java.util.ArrayList;
import java.util.List;

public class ManejoPersonas {
    public static void main(String[] args) {
        PersonaJDBC personaJDBC = new PersonaJDBC();
        List<Persona> personas = personaJDBC.select();

        UsuarioJDBC usuarioJDBC = new UsuarioJDBC();
        List<Usuario> usuarios = usuarioJDBC.select();

        Usuario indiana = new Usuario();
        indiana.setUsername("indiana");
        indiana.setPassword("123456");

        /* Persona alan = new Persona();
        alan.setNombre("Alan");
        alan.setApellido("Rusch");
        alan.setEmail("email@email.com");
        alan.setTelefono("1111111111"); */

        /* Persona juan = new Persona();
        juan.setNombre("Juan");
        juan.setApellido("Rusch");
        juan.setEmail("email@email.com");
        juan.setTelefono("1111111111");
        juan.setIdPersona(5); */

        /* Usuario sideral = new Usuario();
        sideral.setUsername("sideral");
        sideral.setPassword("654321");
        sideral.setIdUsuario(4); */

        /* Persona juan = new Persona();
        juan.setIdPersona(5); */

        Usuario sideral = new Usuario();
        sideral.setIdUsuario(4);

        // personaJDBC.insert(alan);
        // personaJDBC.update(juan);
        // personaJDBC.delete(juan);

        // usuarioJDBC.insert(indiana);
        // usuarioJDBC.update(sideral);
        usuarioJDBC.delete(sideral);

        for(Usuario usuario : usuarios) {
            System.out.println(usuario);
        }
    }
}
