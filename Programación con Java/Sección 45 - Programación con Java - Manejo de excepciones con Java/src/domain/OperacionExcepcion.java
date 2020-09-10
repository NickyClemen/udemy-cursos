package domain;

public class OperacionExcepcion extends Exception {
    /* Tiene que heredar de alguna clase padre (RuntimeException/Exception). Puede heredar de cualquier clase
    de excepción. */
    public OperacionExcepcion(String mensaje) {

        super(mensaje);

    }

}
