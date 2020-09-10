package personas.jdbc;

import org.apache.commons.dbcp2.BasicDataSource;

import javax.sql.DataSource;
import java.sql.*;

public class Conexion {
    private static final String JDBC_URL = "jdbc:mysql://localhost:3306/test?useSSL=false&serverTimezone=UTC";
    private static final String JDBC_USER = "root";
    private static final String JDBC_PASSWORD = "Ciren2020*";

    public static DataSource getDataSource() {
        BasicDataSource basicDataSource = new BasicDataSource();
        basicDataSource.setUrl(JDBC_URL);
        basicDataSource.setUsername(JDBC_USER);
        basicDataSource.setPassword(JDBC_PASSWORD);

        basicDataSource.setInitialSize(5); // Cantidad de conexiones a la base.

        return basicDataSource;
    }

    public static Connection getConnection() throws SQLException {
        return getDataSource().getConnection();
    }

    public static void close(ResultSet rs) {
        try {
            rs.close();
        } catch (SQLException ex) {
            ex.printStackTrace(System.out);
        }
    }

    public static void close(PreparedStatement stmt) {
        try {
            stmt.close();
        } catch(SQLException ex) {
            ex.printStackTrace(System.out);
        }
    }

    public static void close(Connection con) {
        try {
            con.close();
        } catch(SQLException ex) {
            ex.printStackTrace(System.out);
        }
    }
}

