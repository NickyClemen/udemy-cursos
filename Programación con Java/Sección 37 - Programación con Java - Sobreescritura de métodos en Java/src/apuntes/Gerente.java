package apuntes;

public class Gerente extends Empleado {

    private String departamento;

    public Gerente(String nombre, double sueldo, String departamento) {

        super(nombre, sueldo);

        this.departamento = departamento;

    }

    @Override
    public String obtenerDetalles() {

        return "El nombre es "
                    + this.nombre
                    + ", su sueldo es de "
                    + this.sueldo
                    + ", y pertenece al departamento "
                    + this.departamento
                    + ".";

    }

    public String getDepartamento() {

        return this.departamento;

    }

    public void setDepartamento(String departamento) {

        this.departamento = departamento;

    }
}
