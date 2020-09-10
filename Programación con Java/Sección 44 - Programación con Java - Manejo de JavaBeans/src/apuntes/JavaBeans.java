package apuntes;

public class JavaBeans {

    /* Es una clase pura.
    Pueden ser usadas por otras clases, sin conocer a detalle el contenido de la clase.
        1) Debe tener un constructor vacío obligatoriamente por más que haya otros declarados.
        2) Los atributos deben ser privados, para obligar a las clases a utilizar los getters y setters.
        3) Cada propiedad tiene que tener sus métodos get (is si es boolean) y set. No hace falta que tenga
        lso dos.
        4) Tiene que tener la interface java.io.Serializable (no tiene métodos). Sirve para serializar las
        clases. */

    public static void main(String[] args) {

        PersonaBean bean = new PersonaBean();

        bean.setNombre("Nicole");
        bean.setEdad(29);

        System.out.println("El nombre es " + bean.getNombre() + ".");
        System.out.println("La edad es " + bean.getEdad() + ".");

    }

}
