package test;

public class Varargs {

    public static void main(String[] args) {

        // Permite enviar varios parámetros sin especificar el largo.
        imprimirNumeros(15, 1, 4, 6, 20, 60);

        System.out.println("");

        variosParametros("Nicole", true, 14, 2, 5);

    }

    public static void imprimirNumeros(int... numeros) {

        for(int i = 0; i < numeros.length; i++) {

            System.out.println("Elemento N° " + (i + 1) + " es " + numeros[i] + ".");

        }

    }

    public static void variosParametros(String nombre, boolean flag, int... numeros) {

        System.out.println("El nombre es " + nombre + ".");
        System.out.println("El flag es " + flag + ".");

        for(int numero : numeros) {

            System.out.println("El número es " + numero + ".");

        }

    }

}
