package datos;

import excepciones.AccesoDatosEx;

public interface AccesoDatos {

    public static final int MAX_REGISTROS = 10; // Los modificadores de agregan en automático en las interfaces.

    public abstract void insertar() throws AccesoDatosEx;
    public abstract void listar() throws AccesoDatosEx;

    public abstract void simularError(boolean simularError);

}
