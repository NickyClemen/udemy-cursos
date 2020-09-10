package ar.com.mundopc;

public class Orden {

    private int idOrden;
    private Computadora[] computadoras = new Computadora[MAX_COMPUTADORAS];
    private static int contadorOrdenes;
    private int contadorComputadoras;
    private static final int MAX_COMPUTADORAS = 10;

    public Orden() {

        this.idOrden = ++Orden.contadorOrdenes;

    }

    public void agregarComputadora(Computadora computadora) {

        if(this.contadorComputadoras < MAX_COMPUTADORAS) {

            computadoras[this.contadorComputadoras++] = computadora;

        } else {

            System.out.println("Se ha superado el límite de productos.");

        }

    }

    public void mostrarOrden() {

        System.out.println("Orden #" + idOrden);
        System.out.println("Los componentes son ");

        for(int i = 0; i < this.contadorComputadoras; i++) {

            System.out.println(this.computadoras[i]);

        }

    }

}
