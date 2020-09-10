package datos;

public interface AccesoDatos {

    public static final int MAX_REGISTROS = 10; // Los modificadores de agregan en automático en las interfaces.

    public abstract void insertar();
    public abstract void listar();

}
