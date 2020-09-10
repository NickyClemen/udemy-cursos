package apuntes;

public class StaticUso {

    public static void main(String[] args) {

        Persona persona = new Persona("Nicole");
        System.out.println(persona);

        Persona person = new Persona("Cirilla");
        System.out.println(person);

        Persona ivan = new Persona("Ivan");
        System.out.println(ivan);

        // Acceder al atributo estático.
        System.out.println("El contador va por el número " + Persona.getContadorPersona() + ".");

    }

    /* Para poder empezar a crear objetos de una clase, primero se debe cargar la clase en memoria por medio
    del class loader. Entra el juego el contexto estático, y seguirá vigente hasta que la clase de elimine
    de la memoria.
    Contexto dinámico es cuando ya la clase está cargada, y es posible crear objetos a partir de ella.
    Primero se carga el contexto estático, y después el dinámico.
    Tiene más duración que el dinámico, y lo incluye, pero no al revés.

    Palabra static
    Cuando se usa la palabra static, se está indicando que el atributo o método, pertenecen a la clase, no al
    objeto.
    Al declararlo como estático, se está indicando que el atributo se crea una vez. Si un objeto accede al
    valor de la variable estática, lee lo mismo que los demás objetos.
    Es posible interactuar con la clase sin crear un objeto de la misma (acceder a atributos y métodos
    sin haber instanciado la clase).
    Se recomienda que usen el modificador public para ser accedidos desde otras clases.
    Se los conoce como miembros o métodos de clase.

    Static y this
    Dado que el contexto estático carga primero que el dinámico, no se puede usar el this en ese contexto.
    Un método dinámico sí puede acceder a uno estático, ya que ya está creado.
    Se puede acceder a un método dinámico desde uno estático creando un nuevo objeto.
    Lo correcto, es que el método estático use el nombre de la clase, no del objeto. */

}
