package enumeraciones;

public class PruebaEnum {

    public static void main(String[] args) {

        System.out.println(Dias.LUNES);

        System.out.println("");

        System.out.println("Continente " + Continentes.AMERICA + ".");
        System.out.println(Continentes.AMERICA + " tiene " + Continentes.AMERICA.getPaises() + " países.");

        System.out.println("");

        indicarDia(Dias.DOMINGO);

    }

    private static void indicarDia(Dias dias) {

        switch(dias) {

            case DOMINGO:
                System.out.println("Primer día de la semana.");
                break;
            case LUNES:
                System.out.println("Segundo día de la semana.");
                break;
            case MARTES:
                System.out.println("Tercer día de la semana.");
                break;
            case MIERCOLES:
                System.out.println("Cuarto día de la semana.");
                break;
            case JUEVES:
                System.out.println("Quinto día de la semana.");
                break;
            case VIERNES:
                System.out.println("Sexto día de la semana.");
                break;
            case SABADO:
                System.out.println("Último día de la semana.");
                break;
            default:
                System.out.println("No es un día de la semana.");
                break;

        }

    }

}
