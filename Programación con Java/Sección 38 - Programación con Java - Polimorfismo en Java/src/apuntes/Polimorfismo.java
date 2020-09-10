package apuntes;

public class Polimorfismo {

    /* Polimorfismo: Es la habilidad de ejecutar métodos sintácticamete iguales, en tipos distintos.
    Un objeto creado en la memoria heap, solamente puede tener una forma y un tipo, y nunca cambia
    durante toda la vida del objeto creado.
    Sin embargo, un objeto de un tipo, puede referenciar a objetos de otro tipo, siempre que exista una
    relación entre ellos, como puede ser una relación de herencia.
    Una variable de tipo de una clase padre, puede almacenar referencias de clases hijas o del mismo tipo de
    la clase padre., y mandar a llamar los métodos que tienen en común, usando polimorfismo.
    Ejecuta los métodos de la clase hija con las variables de tipo de la clase padre.
    La importancia radica en que un método puede soportar diferentes tipos.
    El polimorfismo tiene mucho en común con el concepto de sobreescritura de métodos, y está estrechamente
    relacionada con el de herencia, ya que debe existir una relación entre los objetos.

    Una subclase, puede invocar el método de la clase padre usando la palabra super.

    Polimorfismo: Múltiples formas en tiempo de ejecución.

    (Se ejecuta el método del tipo al que apunta en tiempo de ejecución).*/

    public static void main(String[] args) {

        Empleado empleado = new Empleado("Nicole", 1000);
        imprimirDetalles(empleado);

        Gerente gerente = new Gerente("Cirilla", 2000, "Bebé");
        imprimirDetalles(gerente);

    }

    public static void imprimirDetalles(Empleado empleado) {

        System.out.println(empleado.obtenerDetalles());

    }

}
