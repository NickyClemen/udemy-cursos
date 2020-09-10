package apuntes;

public class PasajeReferencia {

    public static void main(String[] args) {

        Persona persona = new Persona();

        persona.cambiarNombre("Nicole");

        modificarPersona(persona);

        System.out.println("El nombre es " + persona.obtenerNombre() + ".");

        /* Pasaje por referencia: Desde otros métodos, se pueden cambiar los atributos de los objetos
        (a diferencia de los tipos primitivos, en los cuáles se pasa una copia, y no se puede modificar los
        valores). */

    }

    private static void modificarPersona(Persona personaArg) {

        personaArg.cambiarNombre("Cirilla");

    }

}
