package apuntes;

import dominio.Empleado;

public class ClaseObject {

    public static void main(String[] args) {

        Empleado empleado = new Empleado("Nicole", 41500);
        // System.out.println(empleado);

        Empleado emp = new Empleado("Nicole", 41500);
        // System.out.println(emp);

        // Tiene el mismo hash al tener los mismos valores, pero están en ubicaciones de memoria distintos.
        System.out.println("¿Son iguales? " + (empleado == emp) + "."); // Compara el lugar en memoria.

        compararObjetos(empleado, emp);

    }

    private static void compararObjetos(Empleado obj1, Empleado obj2) {

        System.out.println(obj1);
        System.out.println(obj2);

        // Por referencia.
        if(obj1 == obj2) {

            System.out.println("Los objetos tienen la misma dirección de memoria.");

        } else {

            System.out.println("Los objetos no tienen la misma dirección de memoria.");

        }

        // equals().
        if(obj1.equals(obj2)) {

            System.out.println("Los objetos tienen el mismo contenido.");

        } else {

            System.out.println("Los objetos no tienen el mismo contenido.");

        }

        // hashCode().
        if(obj1.hashCode() == obj2.hashCode()) {

            System.out.println("Los objetos tienen el mismo código hash.");

        } else {

            System.out.println("Los objetos no tienen el mismo código hash.");

        }

    }

    /* Todas las clases heredan de la clase Object (clase raíz).
    Está en el paquete java.lang. Es el paquete core de Java.
    Métodos más frecuentes:
        1) toString(): Representación en texto de las clases. Si no se sobreescribe el método, muestra
        la referencia del objeto.
        2) equals(): Se utiliza para saber si dos objetos son iguales. Con '==' nos compara la ubicación en
        memoria. Si no se lo sobreescribe, compara los espacios en memoria, no los atributos. Se usa muy seguido
        en algoritmos de ordenamiento.
        3) hashCode(): Cuando se sobreescribe equals(), hay que sobreescribir hashCode(). Si dos objetos son iguales
        con el método equals(), hashCode() tiene que retornar el mismo valor para ambos.
        Devuelve un entero para cada objeto. Su uso principal es la optimización de collections basadas en hash table
        para el ordenamiento. Se puede usar el hash code para averiguar si dos métodos son iguales. Método native.

    @Override -> Es opcional. Señala que el método está siendo sobreescrito.
    Cuando no se usa la palabra reservada new para los string, se utiliza el término de String Pool (un lugar
    especial en la memoria), y las direcciones en memoria se van reutilizando. Si se utiliza la palabra
    reservada new, se apunta a otro lugar de memoria.
    Pasa lo mismos con los integer. */

}
