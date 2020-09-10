package apuntes;

public class Enumeraciones {

    /* Enumeraciones en Java (enum)
    Las enumeraciones son un tipo especial de clase, las cuál nos permite asociar una serie de valores de
    tipo final (constantes). */

}

enum Dias {

    /* Es como crear una clase, salvo que se usa la palabra reservada enum.
    Dado que los elementos de las enumeraciones son constantes, se escriben con mayúsculas. */

    LUNES,
    MARTES,
    MIERCOLES,
    JUEVES,
    VIERNES,
    SABADO,
    DOMINGO

}

enum Continentes {

    /* Atributos y métodos de una enumeración.
    Se puede agregar valores a las constantes. Para eso, se tiene que crear un constructor para inicializar
    los valores de cada constante. */

    AFRICA(53),
    EUROPA(46),
    ASIA(44),
    AMERICA(34),
    OCEANIA(14);

    // Atributos.
    private final int paises;

    // Constructor.
    Continentes(int paises) {

        this.paises = paises;

    }

    public int getPaises() {

        return this.paises;

    }

}

class EjemploEnumeraciones {

    public static void main(String[] args) {

        System.out.println("Es el día " + Dias.LUNES);
        indicarDia(Dias.LUNES); // Hay que pasar un valor válido de la enumeración.

        System.out.println("");

        // Enumeración de países.
        System.out.println("Continente N° 4 " + Continentes.AMERICA + ".");
        System.out.println("La cantidad de países que hay en América es " + Continentes.AMERICA.getPaises() + ".");

        System.out.println("");

        // Valores de una enumeración.
        imprimirContinentes();

    }

    public static void indicarDia(Dias dias) {
        // Se puede utilizar el switch con enumeraciones más complejas.

        switch(dias) {

            case LUNES:
                System.out.println("Primer día de la semana.");
                break;
            default:
                System.out.println("Error.");
                break;

        }

    }

    public static void imprimirContinentes() {

        /* De puede utilizar values() para recuperar los valores asociados a una enumeración. Regresa una lista
        de las enumeraciones hechas. */
        for(Continentes c : Continentes.values()) {

            System.out.println("El continente " + c + " tiene " + c.getPaises() + " paises.");

        }

    }

}
