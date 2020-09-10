package apuntes;

public class IntroJdbc {
    /* API (Application Program Interface), es un conjunto de clases que cumplen una tarea muy específica.
    ¿Qué es JDBC (Java Databases Connectivity)?
    Sirve para conectarse a una base de datos. API standard de Java.
    Permite hacer las operaciones básicas CRUD (Create, Update, Read, Delete), entre otras operaciones.
    Cada manejador de base de datos implementa JDBC, y proporciona su propio driver.

    Rol de JDBC en una arquitectura Java EE
    Capa cliente
        -Navegadores
        -Aplicaciones desktop
    Capa web (Servidor web)
        -Servlets
        -JSP

    Capa negocio (Servidor EJB)
        -EJB
    Capa datos
        -Base de datos

    Separar una aplicación en capas ayuda a la división de tareas y mantenimiento.
    JDBC ayuda a la comunicación de la capa de datos con la base. */

    /* Driver JBDC. Es una implementación de la especiificación de la API de JDBC.
    Cada proveedor de DDBB, lo implementa de manera distinta. Dependiendo de la versión del JDK, se tiene que tener en cuenta la versión del JDBC.

    Tipo de conexiones
    1) Driver Manager: Se encuentra en java.sql. Permite crear una nueva conexión por java.forName.
    2) DataSource: Es la más recomendada. Hay que apoyarse de un webserver o de un app server. Una de las ventajas, es que a hacerce la conexión por
    JNDI (Java Naming Directory Interface - API de JAva para el manejo de directorio de recursos), permite cambiar las configuraciones sin tocar
    el codigo.
    3) Pool conexiones: Conjunto de objetos que ya tienen conexión a la base. Permite ahorrar el costo de creación de objetos. Aumenta la performance.

    JEE - Datasource, Application Pool.
    JSE - Driver Manager, Application Pool.

    Stataments en JDBC
        1) Statement: Se utiliza para cualquier tipo de sentencia SQL, pero no guarda el caché de la query. Es la más básica.
            Para un SELECT:
                executeQuery(String sql): Retorna un objeto ResultSet (almacena el resultado en forma de una matriz de dos dimensiones)
                para procesar los registros.
            DML (Data Manipulation Language - INSERT/UPDATE/DELETE)/DDL (Data Definition Language - CREATE TABLE/TRUNCATE TABLE):
                executeUpdate(String sql): Regresa un int para indicar el número de objetos que se actualizaron.
            Para cualquier sentencia de SQL:
                execute(String sql): Retorna un boolean. Se utiliza para ejecutar cualquier query de SQL. El resultado es TRUE si trae un ResultSet,
                o false si no es un SELECT.
        2) PreparedStatement: Se usa para hacer caché del query, evitando la recompilación. Hereda de Statement. Se pueden especificar parámetros.
        3) CallableStatement: Llama procedimientos almacenados en DDBB. Puede devolver un tipo de dato cursor, o uno que se necesite procesar.

    Excepciones en JDBC
        java.sql
            SQLException - Es la más usada. Hay que usar try-catch, o extender el método
                SQLWarning
                    DataTruncationException
                BatchUpdateException */
}
