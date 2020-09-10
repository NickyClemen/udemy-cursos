package entidad;

public class Persona {

    private final int idPersona;
    private String nombre;
    private static int contadorPersonas;

    public Persona(String nombre) {

        this.idPersona = ++Persona.contadorPersonas;
        this.nombre = nombre;

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

}
