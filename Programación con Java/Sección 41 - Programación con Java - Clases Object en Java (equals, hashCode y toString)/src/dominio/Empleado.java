package dominio;

import java.util.Objects;

public class Empleado {

    private String nombre;
    private double sueldo;

    public Empleado(String nombre, double sueldo) {

        this.nombre = nombre;
        this.sueldo = sueldo;

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

    @Override
    public String toString() {

        return super.toString() +
                " " +
                "Empleado{" +
                "nombre='" + this.nombre + '\'' +
                ", sueldo=" + this.sueldo +
                '}';

    }

    @Override
    public boolean equals(Object o) {

        if (this == o) return true;

        if (o == null || getClass() != o.getClass()) return false;
        Empleado empleado = (Empleado) o;
        return Double.compare(empleado.sueldo, sueldo) == 0 &&
                Objects.equals(nombre, empleado.nombre);

    }

    @Override
    public int hashCode() {

        return Objects.hash(nombre, sueldo);

    }

}
