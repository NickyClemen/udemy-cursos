package personas.services;
import personas.dto.PersonaDTO;
import personas.jdbc.Conexion;
import personas.jdbc.PersonaDAO;

import java.sql.*;
import java.util.*;

public class PersonaService implements PersonaDAO {
    private Connection connection;

    private static final String SQL_SELECT = "SELECT idPersona, nombre, apellido, email, telefono FROM personas";
    private static final String SQL_INSERT = "INSERT INTO personas(nombre, apellido, email, telefono) VALUES(?, ?, ?, ?)";
    private static final String SQL_UPDATE = "UPDATE personas SET nombre = ?, apellido = ?, email = ?, telefono = ? WHERE idPersona = ?";
    private static final String SQL_DELETE = "DELETE from personas WHERE idPersona = ?";

    public PersonaService() {}
    public PersonaService(Connection connection) {
        this.connection = connection;
    }

    public List<PersonaDTO> select() throws SQLException {
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        ResultSet resultSet = null;
        PersonaDTO personaDTO = null;
        List<PersonaDTO> personas = new ArrayList<PersonaDTO>();

        try {
            connection = this.connection != null ? this.connection : Conexion.getConnection();
            preparedStatement = connection.prepareStatement(SQL_SELECT);
            resultSet = preparedStatement.executeQuery();

            while(resultSet.next()) {
                int idPersona = resultSet.getInt("idPersona");
                String nombre = resultSet.getString("nombre");
                String apellido = resultSet.getString("apellido");
                String email = resultSet.getString("email");
                String telefono = resultSet.getString("telefono");

                personaDTO = new PersonaDTO();
                personaDTO.setIdPersona(idPersona);
                personaDTO.setNombre(nombre);
                personaDTO.setApellido(apellido);
                personaDTO.setEmail(email);
                personaDTO.setTelefono(telefono);

                personas.add(personaDTO);
            }
        } finally {
            Conexion.close(resultSet);
            Conexion.close(preparedStatement);

            if(this.connection == null) {
                Conexion.close(connection);
            }
        }

        return personas;
    }

    public int insert(PersonaDTO personaDTO) throws SQLException {
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        int rows = 0;

        try {
            connection = this.connection != null ? this.connection : Conexion.getConnection();
            preparedStatement = connection.prepareStatement(SQL_INSERT);

            preparedStatement.setString(1, personaDTO.getNombre());
            preparedStatement.setString(2, personaDTO.getApellido());
            preparedStatement.setString(3, personaDTO.getEmail());
            preparedStatement.setString(4, personaDTO.getTelefono());

            System.out.println("Ejecutando la query " + SQL_INSERT);

            rows = preparedStatement.executeUpdate();

            System.out.println("Se han actualizado " + rows + " registros.");
        } finally {
            Conexion.close(preparedStatement);

            if(this.connection == null) {
                Conexion.close(connection);
            }
        }

        return rows;
    }

    public int update(PersonaDTO personaDTO) throws SQLException {
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        int rows = 0;

        try {
            connection = this.connection != null ? this.connection : Conexion.getConnection();

            System.out.println("Ejecutando la query " + SQL_UPDATE);

            preparedStatement = connection.prepareStatement(SQL_UPDATE);

            preparedStatement.setString(1, personaDTO.getNombre());
            preparedStatement.setString(2, personaDTO.getApellido());
            preparedStatement.setString(3, personaDTO.getEmail());
            preparedStatement.setString(4, personaDTO.getTelefono());
            preparedStatement.setInt(5, personaDTO.getIdPersona());

            rows = preparedStatement.executeUpdate();

            System.out.println("Se han actualizado " + rows + " registros.");
        } finally {
            Conexion.close(preparedStatement);

            if(this.connection == null) {
                Conexion.close(connection);
            }
        }

        return rows;
    }

    public int delete(PersonaDTO personaDTO) throws SQLException {
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        int rows = 0;

        try {
            connection = this.connection != null ? this.connection : Conexion.getConnection();

            System.out.println("Ejecutando la query " + SQL_DELETE);

            preparedStatement = connection.prepareStatement(SQL_DELETE);
            preparedStatement.setInt(1, personaDTO.getIdPersona());
            rows = preparedStatement.executeUpdate();

            System.out.println("Se han eliminado " + rows + " registros.");
        } finally {
            Conexion.close(preparedStatement);

            if(this.connection == null) {
                Conexion.close(connection);
            }
        }

        return rows;
    }
}
