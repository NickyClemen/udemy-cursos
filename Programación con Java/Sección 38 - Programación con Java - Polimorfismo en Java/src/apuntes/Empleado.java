package apuntes;

public class Empleado {

    protected String nombre;
    protected double sueldo;

    protected Empleado(String nombre, double sueldo) {

        this.nombre = nombre;
        this.sueldo = sueldo;

    }

    public String obtenerDetalles() {

        return "El nombre es " + this.nombre + " y su sueldo es de " + this.sueldo + ".";

    }

    public String getNombre() {

        return this.nombre;

    }

    public void setNombre(String nombre) {

        this.nombre = nombre;

    }

    public double getSueldo() {

        return this.sueldo;

    }

    public void setSueldo(double sueldo) {

        this.sueldo = sueldo;

    }

}
