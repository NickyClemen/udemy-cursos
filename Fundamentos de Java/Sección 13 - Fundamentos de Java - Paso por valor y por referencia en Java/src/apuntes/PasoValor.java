package apuntes;

public class PasoValor {

    public static void main(String[] args) {

        int x = 10;
        /* El pasaje por valor aplica a los tipos primitivos. */

        cambiarValor(x);

        System.out.println("X es igual a " + x);

    } // Se puede utilizar por todo el programa.

    private static void cambiarValor(int arg) {

        arg = 20;
        System.out.println("X es igual a " + arg);

    } // El método se puede utilizar desde dentro de la clase.
    /* Dentro del main, solamente se pueden utilizar métodos de tipo static (ya que el main también lo es).
    Pasaje por valor: Pasar una copia del valor de una variable a otra. */

}

