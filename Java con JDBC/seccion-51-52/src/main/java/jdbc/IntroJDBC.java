package jdbc;

import java.sql.*;

public class IntroJDBC {

    public static void main(String[] args) {
        // Paso 1. Conexión a la database.
        String url = "jdbc:mysql://localhost:3306/test?useSSL=false&serverTimezone=UTC";

        try {
            // Paso 2. Crear objecto de conexión.
            Connection conexion = DriverManager.getConnection(url, "root", "Ciren2019");
            /* Se le pasa por parámetro:
                1) URL.
                2) User.
                3) Password. */

            // Paso 3. Creación del statement para poder hacer consultas a la base.
            Statement sentencia = conexion.createStatement();

            // Paso 4. Creación del query.
            String sql = "SELECT id_persona, nombre, apellido, email, telefono FROM persona";

            // Paso 5. Ejecución de la query.
            ResultSet resultado = sentencia.executeQuery(sql);

            // Paso 6. Procesar el resultado.
            while(resultado.next()) {
                // next() se usa para moverse por los registros del resultado.
                System.out.println("ID: " +  resultado.getInt(1) + ".");
                System.out.println(", Nombre: " +  resultado.getString(2) + ".");
                System.out.println(", Apellido: " +  resultado.getString(3) + ".");
                System.out.println(", Email: " +  resultado.getString(4) + ".");
                System.out.println(", Teléfono: " +  resultado.getInt(5) + ".");
            }

            // Paso 7. Cerrar los objetos de conexión.
            resultado.close();
            sentencia.close();
            conexion.close();

        } catch (SQLException e) {

            e.printStackTrace(System.out);

        }

    }

}
