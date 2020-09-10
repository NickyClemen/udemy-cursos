package apuntes;

public class UsoNull {

    /* null se utiliza para indicar que no le asignó ninguna referencia de algún objeto a una variable
    de tipo object. No se puede asignar a variables de tipo primitivo. */

    public static void main(String[] args) {

        Persona persona = new Persona("Nicole");

        System.out.println("El nombre de la persona es " +  persona.obtenerNombre() + ".");

        Persona person = persona;

        System.out.println("El nombre de la persona es " +  person.obtenerNombre() + ".");

        persona = null;

        // Null Pointer Exception.
        System.out.println("El nombre de la persona es " +  persona.obtenerNombre() + ".");

        // Recolector de basura de Java.
        System.gc();

    }

}

class Persona {

    private String nombre;

    Persona(String nombre) {

        this.nombre = nombre;

    }

    public String obtenerNombre() {

        return this.nombre;

    }

}
