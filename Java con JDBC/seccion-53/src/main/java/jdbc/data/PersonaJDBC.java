package jdbc.data;

import jdbc.domain.Persona;

import java.sql.*;
import java.util.*;

public class PersonaJDBC {
    private Connection connection;

    private static final String SQL_SELECT = "SELECT idPersona, nombre, apellido, email, telefono FROM personas";
    private static final String SQL_INSERT = "INSERT INTO personas(nombre, apellido, email, telefono) VALUES(?, ?, ?, ?)";
    private static final String SQL_UPDATE = "UPDATE personas SET nombre = ?, apellido = ?, email = ?, telefono = ? WHERE idPersona = ?";
    private static final String SQL_DELETE = "DELETE from personas WHERE idPersona = ?";

    public PersonaJDBC() {}
    public PersonaJDBC(Connection connection) {
        this.connection = connection;
    }

    public List<Persona> select() throws SQLException {
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        ResultSet resultSet = null;
        Persona persona = null;
        List<Persona> personas = new ArrayList<Persona>();

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

                persona = new Persona();
                persona.setIdPersona(idPersona);
                persona.setNombre(nombre);
                persona.setApellido(apellido);
                persona.setEmail(email);
                persona.setTelefono(telefono);

                personas.add(persona);
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

    public int insert(Persona persona) throws SQLException {
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        int rows = 0;

        try {
            connection = this.connection != null ? this.connection : Conexion.getConnection();
            preparedStatement = connection.prepareStatement(SQL_INSERT);

            preparedStatement.setString(1, persona.getNombre());
            preparedStatement.setString(2, persona.getApellido());
            preparedStatement.setString(3, persona.getEmail());
            preparedStatement.setString(4, persona.getTelefono());

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

    public int update(Persona persona) throws SQLException {
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        int rows = 0;

        try {
            connection = this.connection != null ? this.connection : Conexion.getConnection();

            System.out.println("Ejecutando la query " + SQL_UPDATE);

            preparedStatement = connection.prepareStatement(SQL_UPDATE);

            preparedStatement.setString(1, persona.getNombre());
            preparedStatement.setString(2, persona.getApellido());
            preparedStatement.setString(3, persona.getEmail());
            preparedStatement.setString(4, persona.getTelefono());
            preparedStatement.setInt(5, persona.getIdPersona());

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

    public int delete(Persona persona) throws SQLException {
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        int rows = 0;

        try {
            connection = this.connection != null ? this.connection : Conexion.getConnection();

            System.out.println("Ejecutando la query " + SQL_DELETE);

            preparedStatement = connection.prepareStatement(SQL_DELETE);
            preparedStatement.setInt(1, persona.getIdPersona());
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
