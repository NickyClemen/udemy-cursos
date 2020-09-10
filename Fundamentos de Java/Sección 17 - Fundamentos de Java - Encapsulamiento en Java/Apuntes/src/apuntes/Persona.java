package apuntes;

class Persona {

    private String nombre;
    private double sueldo;
    private boolean eliminado;

    public Persona(String nombre, double sueldo, boolean eliminado) {

        this.nombre = nombre;
        this.sueldo = sueldo;
        this.eliminado = eliminado;

    }

    public String getNombre() {

        return this.nombre;

    } /* Una buena práctica es acceder al estado del objeto desde la misma clase. */

    public void setNombre(String nombre) {

        this.nombre = nombre;

    }

    public double getSueldo() {

        return this.sueldo;

    }

    public void setSueldo(double sueldo) {

        this.sueldo = sueldo;

    }

    public boolean isEliminado() {

        return this.eliminado;

    }

    public void setEliminado(boolean eliminado) {

        this.eliminado = eliminado;

    }

    /* public String toString() {

        return "El nombre es " + this.nombre + ", y tienen un sueldo de " + this.sueldo + ". ¿Fue eliminada? " + this.eliminado + ".";

    } */

    @Override /* Es una anotación. Le concede ciertas características al método.
    Éste anotador indica que se está sobreescribiendo un método. */
    public String toString() {
        return "Persona{" +
                "nombre='" + nombre + '\'' +
                ", sueldo=" + sueldo +
                ", eliminado=" + eliminado +
                '}';

    }
}
