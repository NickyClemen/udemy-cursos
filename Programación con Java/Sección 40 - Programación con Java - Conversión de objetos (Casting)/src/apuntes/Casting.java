package apuntes;

public class Casting {

    /* Casting de objetos.
    Un objeto creado en la memoria heap siempre va a ser del mismo tipo. Sin embargo, una variable sí, siempre
    que exista una relación entre ellos.

        Upcasting: Convertir un objeto a un tipo superior (padre). Se realiza de manera automática.
        No hace falta especificarlo.
        Downcasting: Convertir a un tipo inferior (hijo). Hay que especificar a qué tipo se quiere castear.
        Solamente hay que especificar entre paréntesis el tipo de dato al que se quiere convertir.

            ((Escritor) empleado).método();

    El objetivo es poder acceder a los métodos de un objeto determinado.
    Esto permite reutilizar código. */

    public static void main(String[] args) {

        Empleado empleado;

        empleado = new Escritor("David Foster Wallace", 5000, TipoEscritura.CLASICO);

        System.out.println(empleado.obtenerDetalles());

        // Conversiones posibles.
        // Con una variable.
        Escritor escritor = (Escritor) empleado;
        System.out.println(escritor.getTipoEscrituraEnTexto());
        // Directamente.
        System.out.println(((Escritor) empleado).getTipoEscrituraEnTexto());

        empleado = new Gerente("Nicole", 29000, "Sistemas");

        System.out.println(((Gerente) empleado).getDepartamento());

    }

}
