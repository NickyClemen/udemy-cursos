package apuntes;

public class Persona {

    private int idPersona;
    private String nombre; // Se asocia al objeto (instancia).
    private static int contadorPersona; // Se asocia a la clase (sin instancia).

    public Persona(String nombre) {

        this.idPersona = ++contadorPersona; // Comparte el valor con todos los objetos instanciados de la clase.
        this.nombre = nombre;
        /* El contexto estático no puede acceder al dinámico (porque todavía no fue creado).
        El dinámico sí puede acceder al estático. */

    }

    public int getIdPersona() {

        return this.idPersona;

    }

    public String getNombre() {

        return this.nombre;

    }

    public void setNombre(String nombre) {

        this.nombre = nombre;

    }

    public static int getContadorPersona() {

        return contadorPersona;

    }

    @Override
    public String toString() {

        return "El ID de la persona es el " + this.idPersona + ", y su nombre es " + this.nombre + ".";

    }

}
