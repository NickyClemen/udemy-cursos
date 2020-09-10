package domain;

public class Division {

    private int numerador;
    private int denominador;

    public Division(int numerador, int denominador) throws OperacionExcepcion {

        /* Con throws se define que el constructor puede lanzar excepciones. */
        if(this.denominador == 0) {

            // Se crea un mensaje de error.
            throw new OperacionExcepcion("Denominador igual a cero.");

        }

        this.numerador = numerador;
        this.denominador = denominador;

    }

    public void visualizarOperacion() {

        System.out.println("El resultado de la divisiónn es de " + (this.numerador / this.denominador) + ".");

    }

}
