package jdbc;

import jdbc.data.Conexion;
import jdbc.data.PersonaJDBC;
import jdbc.domain.Persona;

import java.sql.Connection;
import java.sql.SQLException;

public class ManejoPersonas {
    public static void main(String[] args) {
        Connection connection = null;

        try {
            connection = Conexion.getConnection();

            if(connection.getAutoCommit() == true) {
                connection.setAutoCommit(false);
            }

            PersonaJDBC personaJDBC = new PersonaJDBC(connection);

            Persona faye = new Persona();
            faye.setIdPersona(3);
            faye.setNombre("Cirilla Faye");
            faye.setApellido("Rusch");
            faye.setEmail("cirilla.rusch@gmail.com");
            faye.setTelefono("1170002448");

            personaJDBC.update(faye);

            Persona daira = new Persona();
            daira.setNombre("Daira");
            daira.setApellido("Mazza");
            daira.setEmail("daira.mazza@gmail.com");
            daira.setTelefono("XXXXXX");

            personaJDBC.insert(daira);

            connection.commit();
        } catch (SQLException ex) {
            ex.printStackTrace(System.out);
            try {
                connection.rollback();
            } catch (SQLException e) {
                e.printStackTrace(System.out);
            }
        }
    }
}
