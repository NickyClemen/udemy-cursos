package apuntes;

import ar.com.zireael.ventas.*;

public class DiseñoClases {

   public static void main(String[] args) {

       Producto camisa = new Producto("Camisa", 50);
       Producto pantalon = new Producto("Pantalón", 100);

       Orden uno = new Orden();

       uno.agregarProducto(camisa);
       uno.agregarProducto(pantalon);

       uno.mostrarOrden();

   }

}
