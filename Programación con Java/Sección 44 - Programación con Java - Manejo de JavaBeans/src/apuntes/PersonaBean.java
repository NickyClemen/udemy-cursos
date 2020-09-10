package apuntes;

public class PersonaBean implements java.io.Serializable {
// No es necesario la interface si no se va a enviar por la red.

    private String nombre;
    private int edad;

    public PersonaBean() {}

    public PersonaBean(String nombre, int edad) {

        this.nombre = nombre;
        this.edad = edad;

    }

    public String getNombre() {

        return this.nombre;

    }

    public void setNombre(String nombre) {

        this.nombre = nombre;

    }

    public int getEdad() {

        return this.edad;

    }

    public void setEdad(int edad) {

        this.edad = edad;

    }

}
