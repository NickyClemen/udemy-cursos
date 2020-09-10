package ar.com.javadoc;

/**
 * Esta clase permite realizar operaciones matemáticas.
 * @author nicole.ordoqui.sp
 * @version 1.0
 */

public class Aritmetica {

    // Se puede documentar los atributos, pero no se muestra en JavaDoc.
    int operandoA;
    int operandoB;

    /** Constructor vacío. */
    public Aritmetica() {}

    /** Constructor con dos parámetros para realizar las operaciones.
     * @param a es el primer número entero.
     * @param b es el segundo número entero. */
    public Aritmetica(int a, int b) {

        this.operandoA = a;
        this.operandoB = b;

    }

    /** Éste método realiza la suma de dos operandos.
     * @return int resultado de la suma. */
    public int suma() {

        return this.operandoA + this.operandoB;

    }

}
