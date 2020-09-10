package apuntes;

public class Gerente extends Empleado {

    private String departamento;

    public Gerente(String nombre, double sueldo, String departamento) {

        super(nombre, sueldo);
        this.departamento = departamento;

    }

    @Override
    public String obtenerDetalles() {

        return super.obtenerDetalles() + ". El departamento es " + this.departamento;

    }

    public String getDepartamento() {

        return this.departamento;

    }

}
