package apuntes;

public class SobreescribirMetodos {

    /* Tiene que ver con el concepto de herencia, y se apoya en la modificación de un método desde una
    clase hija, a uno heredado por la clase padre.

    El método sobreescrito por la subclase, tiene que ser igual al heredado por la superclase. En lo único
    que puede variar, es en el modificador de acceso (no puede ser más restrictivo que el método de la clase padre). */

    public static void main(String[] args) {

        Empleado empleado = new Empleado("Nicole", 1000);
        System.out.println(empleado.obtenerDetalles());

        Gerente gerente = new Gerente("Cirilla", 2000, "Bebé");
        System.out.println(gerente.obtenerDetalles());

    }

}
