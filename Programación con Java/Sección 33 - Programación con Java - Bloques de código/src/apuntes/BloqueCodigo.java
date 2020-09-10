package apuntes;

import bloquescodigo.*;

public class BloqueCodigo {

    /* Bloques de código.
    Secciones de código que empiezan y terminan con llaves ({}). */

    public static void main(String[] args) {

        Persona persona = new Persona();

        System.out.println("ID #" + persona.getIdPersona() + ".");

    }

}

class PersonaUno {

    private final int idPersona;
    private static int contadorPersonas;

    static {

        System.out.println("Ejecuta el bloque estático.");
        contadorPersonas = 10;

    } /* Bloque estático anónimo. Se ejecuta antes que el bloque NO estático.
    Se puede utilizar solamente variables o métodos estáticos. */

    {

        System.out.println("Ejecuta bloque inicializador.");
        idPersona = ++contadorPersonas;

    } /* Bloque anónimo: Se ejecuta antes que el constructor.
    Nos permiten inicializar variables de clase. Éste tipo de bloque, conocido como inicializador, pueden
    iniciar dos tipos de variables:
        1) De instancia.
        2) De tipo static.
    Recordar que primero se crean las variables estáticas, y luego las de clase. */

    PersonaUno() {

        System.out.println("Se ejecuta el constructor.");

    }

    public int getIdPersona() {

        return this.idPersona;

    }

}
