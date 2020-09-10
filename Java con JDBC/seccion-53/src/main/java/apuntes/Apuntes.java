package apuntes;

public class Apuntes {
    /* Transacciones: Conjunto de instrucciones SQL. Son agrupadas en bloques de ejecución. Si una falla,
    se puede hacer roll back a todo el bloque, sin alterar el estado de la base de datos. Si
    sale bien, se guardan los cambios haciendo commit de todos los bloques ejecutados.

    Una transacción, es un conjunto de instrucciones agrupadas en un bloque de código.

    Uso de métodos en una transacción:
        1) autocommit. Valores boolean. Cuando se inicia una transacción, se pone el autocommit en false
        para evitar que se guarde con errores. Por default, viene en true.
        2) commit: Si la ejecucuión salió bien.
        3) rollback: Revierte cambios si la transacción falló.
        Si se cierra la conexión a al DDBB, se hace un commit automático.
        Es común usar en try-catch. */
}
