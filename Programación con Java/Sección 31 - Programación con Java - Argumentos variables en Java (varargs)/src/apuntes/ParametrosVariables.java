package apuntes;

public class ParametrosVariables {

    /* Parámetros variables (varargs).
    Cuando se quieren enviar varios parámetros del mismo tipo. */

}

class EjemploVarArgs {

    public static void main(String[] args) {

        // imprimirNumeros(15, 20, 3, 61, 75, 18, 10);
        // imprimirNumerosForEach(15, 20, 3, 61, 75, 18, 10);
        variosParamatros("Nicole", true, 15, 20, 14);

    }

    // Sintaxis para varargs.
    public static void imprimirNumeros(int... numeros) {

        /* Reglas para utilizar argumentos variables:
            1) Los elementos que se envían, se convierten en un array, por lo que los parámetros siempre
            tienen que ser del mismo tipo.
            2) Para indicar que se está enviando un varargs, hay que agregar los "..." después del tipo
            de dato del argumento.
        Se puede usar cualquier tipo de dato, incluso tipos Object. */

        int elemento;

        for(int i = 0; i < numeros.length; i++) {

            elemento = numeros[i];
            System.out.println("Elemento " + (i + 1) + " - " + elemento + ".");

        }

    }

    // Foreach para iterar arrays o colecciones.
    public static void imprimirNumerosForEach(int... numeros) {

        // ForEach.
        for(int numero : numeros) {

            System.out.println("Elemento " + " - " + numero + ".");

        } /* A diferencia de un for normal, el forEach recibe dos parámetros:
            1) Una variable que recibe cada uno de los elementos.
            2) Objeto a iterar.
          La desventaja de éste ciclo, es que no tiene index (solamente retorna el elemento a iterar). */

    }

    public static void variosParamatros(String nombre, boolean valido, int... numeros) {
        /* Si se van a usar varios argumentos, el varargs tiene que ser el último de los argumentos
        pasados al método. */

        System.out.println("El nombre es " + nombre + ".");
        System.out.println("¿Es válido? " + valido + ".");

        for(int numero : numeros) {

            System.out.println("El número es " + numero + ".");

        }

    }

}
