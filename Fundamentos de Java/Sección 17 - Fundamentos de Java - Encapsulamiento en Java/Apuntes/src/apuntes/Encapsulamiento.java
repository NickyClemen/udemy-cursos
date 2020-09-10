package apuntes;

public class Encapsulamiento {

    public static void main(String[] args) {

        Persona persona = new Persona("Nicole", 29000, false);

        /* System.out.println("El nombre es " + persona.getNombre() + ".");
        System.out.println("El sueldo es " + persona.getSueldo() + ".");
        System.out.println("¿Fue borrado? " + persona.isEliminado() + "."); */

        persona.setNombre("Cirilla");
        persona.setSueldo(34000);
        persona.setEliminado(true);

        System.out.println(persona.toString());

        /* System.out.println("El nombre es " + persona.getNombre() + ".");
        System.out.println("El sueldo es " + persona.getSueldo() + ".");
        System.out.println("¿Fue borrado? " + persona.isEliminado() + "."); */

        System.out.println(persona);
        // El método println llama por default al método toString().

    }

    /* El encapsulamiento es un concepto muy importante en POO.
    Nos permite aislar los datos de nuestros objetos del acceso de otros objetos externos, y de ésta
    manera, restringir el acceso directo a los atributos o métodos.
    Estado de un objeto: Valores actuales de cada uno de los atributos del objeto. Cualquier cambio de éstos
    valores, vcambia el estado interno del objeto.

        1) El estado de un objeto está generalemente oculto (encapsulamiento). Se utilizan cuatro modificadores
        de acceso:
            a) Public: Permite acceder desde cualquier cotra clase o método (desde cualquier otra parte del
            programa).
            b) Private: Permite acceder sólo desde la misma clase al método o atributo marcado con éste
            modificador (la misma clase puede acceder a los atributos y métodos).
            c) Protected.
            d) Default (Package).

    Los modificadores aplican a varias partes de una clase.
    Se pueden utilizar mutators y accessors para poder traer los atributos privados:
        1) Getter: Para traerlo. Si es de tipo boolean, el prefijo es 'is'.
        2) Setter: Para modificarlo. */

}
