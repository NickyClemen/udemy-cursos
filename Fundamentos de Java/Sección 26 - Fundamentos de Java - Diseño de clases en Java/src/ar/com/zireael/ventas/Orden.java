package ar.com.zireael.ventas;

import java.util.Date;

public class Orden {

    private int idOrden;
    private Date fecha;
    private Producto productos[];
    private static int contadorOrdenes;
    private int contadorProductos;
    private static final int MAX_PRODUCTOS = 10;

    public Orden() {

        this.idOrden = ++Orden.contadorOrdenes;
        this.fecha = new Date();
        this.productos = new Producto[MAX_PRODUCTOS];

    }

    public void agregarProducto(Producto producto) {

        if(this.contadorProductos < MAX_PRODUCTOS) {

            productos[this.contadorProductos++] = producto;

        } else {

            System.out.println("Se ha superado el límite de productos.");

        }

    }

    public double calcularTotal() {

        double total = 0;

        for(int i = 0; i < this.contadorProductos; i++) {

            Producto producto = this.productos[i];

            total += producto.getPrecio();

        }

        return total;

    }

    public void mostrarOrden() {

        System.out.println("Orden #" + this.idOrden);
        System.out.println("Fecha " + this.fecha);
        System.out.println("Productos de la orden ");

        for(int i = 0; i < this.contadorProductos; i++) {

            System.out.println(this.productos[i]);

        }

        System.out.println("Total $" + this.calcularTotal());

    }

}
