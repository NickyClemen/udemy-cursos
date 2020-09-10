package jdbc.data;

import jdbc.domain.Usuario;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class UsuarioJDBC {
    private Connection connection;

    private static final String SQL_SELECT = "SELECT idUsuario, username, password FROM usuarios";
    private static final String SQL_INSERT = "INSERT INTO usuarios(username, password) VALUES(?, ?)";
    private static final String SQL_UPDATE = "UPDATE usuarios SET username = ?, password = ? WHERE idUsuario = ?";
    private static final String SQL_DELETE = "DELETE from usuarios WHERE idUsuario = ?";

    public UsuarioJDBC() {}

    public UsuarioJDBC(Connection connection) {
        this.connection = connection;
    }

    public List<Usuario> select() throws SQLException {
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        ResultSet resultSet = null;
        Usuario usuario = null;
        List<Usuario> usuarios = new ArrayList<Usuario>();

        try {
            connection = this.connection != null ? this.connection : Conexion.getConnection();
            preparedStatement = connection.prepareStatement(SQL_SELECT);
            resultSet = preparedStatement.executeQuery();

            while(resultSet.next()) {
                int idUsuario = resultSet.getInt("idUsuario");
                String username = resultSet.getString("username");
                String password = resultSet.getString("password");

                usuario = new Usuario();
                usuario.setIdUsuario(idUsuario);
                usuario.setUsername(username);
                usuario.setPassword(password);

                usuarios.add(usuario);
            }
        } finally {
            Conexion.close(resultSet);
            Conexion.close(preparedStatement);

            if(this.connection == null) {
                Conexion.close(connection);
            }
        }

        return usuarios;
    }

    public int insert(Usuario usuario) throws SQLException {
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        int rows = 0;

        try {
            connection = this.connection != null ? this.connection : Conexion.getConnection();
            preparedStatement = connection.prepareStatement(SQL_INSERT);

            preparedStatement.setString(1, usuario.getUsername());
            preparedStatement.setString(2, usuario.getPassword());

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

    public int update(Usuario usuario) throws SQLException {
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        int rows = 0;

        try {
            connection = this.connection != null ? this.connection : Conexion.getConnection();

            System.out.println("Ejecutando la query " + SQL_UPDATE);

            preparedStatement = connection.prepareStatement(SQL_UPDATE);

            preparedStatement.setString(1, usuario.getUsername());
            preparedStatement.setString(2, usuario.getPassword());
            preparedStatement.setInt(3, usuario.getIdUsuario());

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

    public int delete(Usuario usuario) throws SQLException {
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        int rows = 0;

        try {
            connection = this.connection != null ? this.connection : Conexion.getConnection();

            System.out.println("Ejecutando la query " + SQL_DELETE);

            preparedStatement = connection.prepareStatement(SQL_DELETE);
            preparedStatement.setInt(1, usuario.getIdUsuario());
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
