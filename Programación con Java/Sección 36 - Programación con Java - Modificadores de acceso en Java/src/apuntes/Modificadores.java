package apuntes;

public class Modificadores {

    /* Modificadores de acceso: Controlan quiénes pueden usar las características de las clases.

        public(+): Se puede usar en Clases, Variables, Métodos, Constructores. Es el menos restrictivo, ya que
        todas las clases externas pueden hacer uso del elemento, dentro del package u otro distinto. Es el más simple
        de aplicar. Es común que los getters y setters sean públicos.
        protected(#): Se puede usar en Variables, Métodos, Constructores. No en Clases. Se utilizan para proteger las
        clases que no descienden directamente de la clase que define el elemento protected, y que no puedan acceder a
        dicho elemento. Por lo tanto, será común utilizar el modificador protected en atributos o métodos de una clase,
        con el objetivo de que las clases hijas puedan acceder a éstos elementos, ya sea en el mismo paquete y otro.
        Protege su uso de clases externas que no tienen nada que ver en la jerarquía de subclases.
        default(~)(package): Se puede usar en Clases, Variables, Métodos, Constructores. No es una palabra reservada
        en Java. Para definir una clase de tipo default, basta con omitir el modificador de acceso. Limita el acceso
        a la clase dentro del mismo package, por lo que clases que estén en otros packages no pueden utilizar.
        No se suele usar, ya que es poco seguro. Permite que otras clases dentro del package accedan a la clase.
        private(-): Se puede usar en Variables, Métodos, Constructores. No en Clases. Es el más restrictivo,
        ya que el elemento puede ser usada solamente por la misma clase (siquiera las subclases).
        Es común que los atributos sean private, ya que se presentan con getters y setters. */

}
