package paqueteUno;

public class ClaseDos {

    public ClaseDos() {

        new ClaseUno(); // Constructor vacío public.
        new ClaseUno("Uno"); // Constructor public.
        new ClaseUno("Uno", "Dos"); /* Se puede llamar el constructor protegido al estar en el mismo
        package. */
        new ClaseUno("Uno", "Dos", "Tres"); // Constructor default.

    }

    public void pruebaDesdeClaseDos() {

        ClaseUno claseUno = new ClaseUno();

        System.out.println("Atributo público: " + claseUno.atributoPublico);
        System.out.println("Atributo protected: " + claseUno.atributoProtegido);
        System.out.println("Atributo default: " + claseUno.atributoDefault);

        System.out.println("");

        System.out.println("Método público: " + claseUno.metodoPublico());
        System.out.println("Método protected: " + claseUno.metodoProtected());
        System.out.println("Método default: " + claseUno.metodoDefault());

    }

    public static void main(String[] args) {

        ClaseDos claseDos = new ClaseDos();
        claseDos.pruebaDesdeClaseDos();

    }

}
