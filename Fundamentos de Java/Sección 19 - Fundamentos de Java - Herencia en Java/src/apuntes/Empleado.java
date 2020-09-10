package apuntes;

public class Empleado extends Persona {

    /* Se heredan todos los métodos y atributos que sean públicos. Los atributos privados y los constructores
    NO se heredan. */

    private int idEmpleado;
    private double sueldo;
    private static int contadorEmpleado;

    public Empleado(String nombre, double sueldo) {

        super(nombre); // Se manda a llamar al contructor de la clase padre.
        this.idEmpleado = ++contadorEmpleado;
        this.sueldo = sueldo;

    }

    public int getIdEmpleado() {

        return this.idEmpleado;

    }

    public double getSueldo() {

        return this.sueldo;

    }

    public void setSueldo(double sueldo) {

        this.sueldo = sueldo;

    }

    public static int getContadorEmpleado() {

        return Empleado.contadorEmpleado;

    }

    @Override
    public String toString() {

        return super.toString() + "Empleado{" +
                "idEmpleado=" + this.idEmpleado +
                ", sueldo=" + this.sueldo +
                '}';
        /* super.toString() retorna el estado de la clase padre. */

    }
}
