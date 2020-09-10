package bloquescodigo;

public class Persona {

    private final int idPersona;
    private static int contadorPersonas;

    static {

        contadorPersonas = 10;
        /* Solamente se pueden utilizar variables o métodos estáticos. */
        System.out.println("Bloque estático.");

    }

    {

        this.idPersona = ++contadorPersonas;
        /* Es más común inicializar las variables final en el constructor.
        Se ejecuta antes del constructor. */
        System.out.println("Bloque no estático.");

    }

    public Persona() {

        System.out.println("Constructor.");

    }

    public int getIdPersona() {

        return this.idPersona;

    }

}
