package apuntes;

public class PruebaPersona {

    public static void main(String[] args) {

        // Creación de un objeto.
        Persona nicole = new Persona(); // -> Instanciar un objeto.
        Persona cirilla = new Persona(); // -> Se crea una nueva referencia.

        // Modificar valores de los atributos.
        nicole.nombre = "Nicole";
        nicole.apellido = "Ordoqui";

        cirilla.nombre = "Cirilla";
        cirilla.apellido = "Rusch";

        // Acceder al método.
        nicole.desplegarNombre();
        cirilla.desplegarNombre();

        /* Lo que almacena el nombre de la variable, es el espacio en memoria que ocupa el objeto.
        En otros lenguajes, se los conoce como apuntadores. */

    }

}
