package paqueteDos;

import paqueteUno.ClaseUno;

public class ClaseCuatro {

    public ClaseCuatro() {

        new ClaseUno(); // Constructor vacío public.
        new ClaseUno("Uno"); // Constructor public.

    }

    public void pruebaDesdeClaseCuatro() {

        ClaseUno claseCuatro = new ClaseUno();

        System.out.println("Atributo público: " + claseCuatro.atributoPublico);

        System.out.println("");

        System.out.println("Método público: " + claseCuatro.metodoPublico());

    }

    public static void main(String[] args) {

        ClaseCuatro claseCuatro = new ClaseCuatro();
        claseCuatro.pruebaDesdeClaseCuatro();

    }

}
