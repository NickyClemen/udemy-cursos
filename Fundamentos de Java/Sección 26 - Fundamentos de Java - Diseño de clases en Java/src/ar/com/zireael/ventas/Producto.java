package ar.com.zireael.ventas;

public class Producto {

    private int idProducto;
    private String nombre;
    private double precio;
    private static int contadorProductos;

    private Producto() {

        this.idProducto = ++Producto.contadorProductos;

    }

    public Producto(String nombre, double precio) {

        this();
        this.nombre = nombre;
        this.precio = precio;

    }

    public int getIdProducto() {

        return this.idProducto;

    }

    public String getNombre() {

        return this.nombre;

    }

    public void setNombre(String nombre) {

        this.nombre = nombre;

    }

    public double getPrecio() {

        return this.precio;

    }

    public void setPrecio(double precio) {

        this.precio = precio;

    }

    public static int getContadorProductos() {

        return Producto.contadorProductos;

    }

    @Override
    public String toString() {

        return "Producto{" +
                "idProducto=" + this.idProducto +
                ", nombre='" + this.nombre + '\'' +
                ", precio=" + this.precio +
                '}';

    }
}
