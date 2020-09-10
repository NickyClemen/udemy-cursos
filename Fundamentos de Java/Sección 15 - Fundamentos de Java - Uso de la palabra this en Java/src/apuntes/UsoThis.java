package apuntes;

public class UsoThis {

    /* This. Es un operador.
    Permite acceder a cualquier objeto que se esté ejecutando.
    Es único para cada objeto (siempre apunta al que se está ejecutando).
    No se puede usar en un contexto estático.
        1) Es una referencia implícita al objeto que se está ejecutando.
        2) Es útil para evitar la ambigüedad entre las variables de clase y locales.
        3) Permite a un objeto enviarse a sí mismo como parámetro.
    Hay dos tiempos en Java:
        1) De compilación: Cuando se está creando el programa.
        2) De ejecución: Cuando se está ejecutando el programa.
    Object es un comodín que sirve para recivir cualquier clase como argumento (todas las clases
    heredan de Object). */

    public static void main(String[] args) {

        Persona persona = new Persona("Nicole");

    }

}

class Persona {

    private String nombre;

    Persona(String nombre) {

        this.nombre = nombre;
        Imprimir imprimir = new Imprimir();
        imprimir.imprimir(this);

    }

}

class Imprimir {

    public void imprimir(Persona p) {

        System.out.println("El objeto al que apunta es " + p + ".");
        System.out.println("this apunta a " + this + ".");

    }

}
