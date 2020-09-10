package paqueteDos;

import paqueteUno.ClaseDos;
import paqueteUno.ClaseUno;

public class ClaseTres extends ClaseUno {

    public ClaseTres() {

        // Se puede llamar al constructor protected usando super.
        super("Uno", "Dos");

        new ClaseUno(); // Constructor vacío public.
        new ClaseUno("Uno"); // Constructor public.

    }

    public void pruebaDesdeClaseTres() {

        ClaseUno claseTres = new ClaseUno();

        System.out.println("Atributo público: " + claseTres.atributoPublico);

        // Se accede al atributo protected directamente.
        System.out.println("Atributo protected: " + atributoProtegido);

        System.out.println("");

        System.out.println("Método público: " + claseTres.metodoPublico());

        // Se accede al método protected.
        System.out.println("Método protected: " + metodoProtected());

    }

    public static void main(String[] args) {

        ClaseTres claseTres = new ClaseTres();
        claseTres.pruebaDesdeClaseTres();

    }

}
