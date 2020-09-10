package apuntes;

public class InstanceOf {

    /* instanceof responde si una clase tienen relación con otra que indiquemos.
    Se recomienda siempre revisar primero las clases de menor jerarquía, hasta el final, las de mayor jerarquía.
    Puede usarse solamente en variables de tipo object, pero no en tipos primitivos. */

    public static void main(String[] args) {

        Empleado empleado = new Empleado("Nicole", 1000);
        determinaTipo(empleado);

        Gerente gerente = new Gerente("Cirilla", 2000, "Bebé");
        determinaTipo(gerente);

    }

    public static void determinaTipo(Empleado empleado) {

        if(empleado instanceof Gerente) {

            System.out.println( ((Gerente) empleado).getDepartamento() ); // Casting de objetos.

        } else if(empleado instanceof Empleado){

            System.out.println(empleado.getNombre());

        } else if(empleado instanceof Object) {

            System.out.println(empleado.toString());

        }

    }

}
