package apuntes;

import palabrafinal.*;

public class PalabraFinal {

    /* La palabra final no afecta solamente a las variables, sino que es posible utilizarla en métodos
    y en clases.
        1) En variables: Evita cambiar el valor qe almacena la variable. Dado que es cómo crear una constante
        en Java, es común combinarla con la palabra static para poder ser accedida directamente en lugar de
        crear una instancia de la clase.
        2) En métodos: Evita que se modifique la definición de un método desde una subclase. Una subclase no puede
        sobreescribir el comportamiento de un método de la clase padre (así cómo lo hereda, lo tiene que usar).
        3) En clases: Evita que se cree una subclase. Se evita la instancia de clase. */

    public static void main(String[] args) {

        /* Modificar una constante.
        ClaseFinal.VAR_PRIMITIVO = 20; */

        /* Modificar la referencia de un Object.
        ClaseFinal.VAR_PERSONA = new Persona(); */

        // Modificar los atributos del objeto al que apunta.
        ClaseFinal.VAR_PERSONA.serNombre("Nicole");
        System.out.println(ClaseFinal.VAR_PERSONA.getNombre() + ".");

        ClaseFinal.VAR_PERSONA.serNombre("Cirilla");
        System.out.println(ClaseFinal.VAR_PERSONA.getNombre() + ".");

    }

}
