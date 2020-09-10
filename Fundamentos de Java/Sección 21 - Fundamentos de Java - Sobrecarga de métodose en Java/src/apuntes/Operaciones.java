package apuntes;

public class Operaciones {

    public static int sumar(int a, int b) {

        System.out.println("Método sumar con tipo de dato int.");

        return a + b;

    }

    public static double sumar(double a, double b) {

        System.out.println("Método sumar con tipo de dato double.");

        return a + b;

    }

    public static double sumar(int a, double b) {

        System.out.println("Método sumar con tipo de dato int-double.");

        return a + b;

    }

    public static double sumar(double a, int b) {

        System.out.println("Método sumar con tipo de dato double-int.");

        return a + b;

    }
}
