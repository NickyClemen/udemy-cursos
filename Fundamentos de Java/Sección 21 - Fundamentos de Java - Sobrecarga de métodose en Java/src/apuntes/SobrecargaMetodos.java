package apuntes;

public class SobrecargaMetodos {

    public static void main(String[] args) {

        System.out.println("Resultado uno: " + Operaciones.sumar(3, 4) + ".");
        System.out.println("Resultado dos: " + Operaciones.sumar(2.0, 4) + ".");
        System.out.println("Resultado tres: " + Operaciones.sumar(2.0, 4) + ".");
        System.out.println("Resultado cuatro: " + Operaciones.sumar(3, 5L) + ".");
        System.out.println("Resultado cinco: " + Operaciones.sumar(5F, 'A') + ".");

    }

    /* Sobrecarga de métodos.
    Es similar a la sobrecarga de constructores, pero en éste caso, cualquier método puede ser sobrecargado.
    Es ofrecer más de una opción de alguno de los métodos de la clase, con el objetivo de brindar más opciones para
    su uso.
    Para que exista la sobrecarga, tiene que haber uno más métodos con el mismo nombre. Para que exista, los
    tipos de los argumentos de los métodos tienen que ser distintos y el orden.
    Importa el tipo de dato, no el nombre de los argumentos o el tipo de dato de retorno.
        1) Los métodos tienen que llamarse igual.
        2) Distinto tipo de dato.
        3) Distinto orden en los argumentos.
    El método a sobrecargar puede estar en la clase, o en una superior.
    Los argumentos pueden ser de tipo primitivo u Object.
    Se hace la conversión de tipos de manera automática (el tipo de dato superior). */

}
