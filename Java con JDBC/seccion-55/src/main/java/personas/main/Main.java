package personas.main;

import personas.dto.PersonaDTO;
import personas.jdbc.Conexion;
import personas.jdbc.PersonaDAO;
import personas.services.PersonaService;

import java.sql.*;
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Connection connection = null;

        try {
            connection = Conexion.getConnection();

            if(connection.getAutoCommit() == true) {
                connection.setAutoCommit(false);
            }

            PersonaDAO personaService = new PersonaService(connection);

            List<PersonaDTO> personas = personaService.select();

            for(PersonaDTO persona : personas) {
                System.out.println(persona);
            }

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
