package apuntes;

public class UsoGenerics {

    /* Con los generics, se puede dejar pendiente el tipo de dato hasta el momento de instanciar alguna
    clase genérica o del pasaje de un parámetro genérico.

    Tipos genéricos en Java.
        1) E: Element (utilizado generalmente por el framework de Collections de Java).
        2) K: Key (Key, utilizada en Maps).
        3) N: Number (Utilizada para números).
        4) T: Type (Representa un type, es decir, una clase).
        5) V: Value (Value. Se utiliza para Maps).
        6) S, U, V, etc.: Usado para representar otros tipos.

    La API de Collections es la más afectada por los generics. Como albergan elementos de tipo object, era
    necesario hacer casting del tipo de dato para poder usarlos, lo que llevaba a errores.
    Con los generics, se obliga a la collection a albergar un tipo de dato o sus subtipos (downcasting). Elimina
    la necesidad de hacer casting. */

}

// Definición de una clase genérica.
class ClaseGenerica<T> {
    /* Se utiliza el '<>' para definir que la clase es genérica. La 'T' es una convención para nombrar
    el tipo genérico. */

    private T objeto; // Atributo genérico.

    public ClaseGenerica(T objeto) {

        this.objeto = objeto;

    }

    public void obtenerTipo() {

        System.out.println(objeto.getClass().getSimpleName());

    }

    public static void main(String[] args) {

        /* Instancia de clase genérica. Se pone el tipo de dato en el '<>'. Se pueden instanciar tipos object, no
        primitivos. */
        ClaseGenerica<Integer> objInt = new ClaseGenerica<Integer>(15);
        objInt.obtenerTipo();

        ClaseGenerica<String> objString = new ClaseGenerica<String>("Nicole");
        objString.obtenerTipo();

    }

}
