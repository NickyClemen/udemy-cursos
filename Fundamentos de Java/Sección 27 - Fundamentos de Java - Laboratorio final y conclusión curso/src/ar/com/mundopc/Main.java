package ar.com.mundopc;

public class Main {

    public static void main(String[] arg) {

        Computadora dell = new Computadora(

                "Dell Latitude",
                new Monitor("LG", 21 ),
                new Teclado("USB", "Genius"),
                new Raton("USB", "Genius")

        );

        Computadora hp = new Computadora(

                "HP Pavillion",
                new Monitor("LG", 21 ),
                new Teclado("USB", "Genius"),
                new Raton("USB", "Genius")

        );

        Orden lista = new Orden();

        lista.agregarComputadora(dell);
        lista.agregarComputadora(hp);

        lista.mostrarOrden();

    }

}
