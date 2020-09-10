package apuntes;

public class Foreach {

    /* Sintaxis resumida para iterar arrays o colecciones de datos. Se utiliza para evitar errores
    al obviar el uso de contadores para recorrer los elementos.
    Se pueden iterar elementos de cualquier tipo de dato. */

    public static void main(String[] args) {

        // Arrays.
        int[] edades = { 15, 20, 41, 50 };

        for(int edad : edades) {

            System.out.println(edad);

        }

        // Object.
        Persona[] personas = { new Persona("Nicole"), new Persona("Cirilla") };

        for(Persona persona : personas) {

            String nombre = persona.getNombre();
            System.out.println(nombre);

        }

    }

}
class Persona {

    private String nombre;

    public Persona() {}

    public Persona(String nombre) {

        this.nombre = nombre;

    }

    public String getNombre() {

        return this.nombre;

    }

}

