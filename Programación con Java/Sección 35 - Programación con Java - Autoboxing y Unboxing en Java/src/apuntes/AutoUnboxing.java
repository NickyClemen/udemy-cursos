package apuntes;

public class AutoUnboxing {

    /* Autoboxing: El compilador hace de manera automática la conversión de un tipo primitivo a un tipo Object.
    Solamente hay que anteponer el wrapper al tipo de dato primitivo para el autoboxing.

    Unboxing: Proceso contrario al autoboxing.

    boolean - Boolean.
    byte - Byte.
    char - Character.
    float - Float.
    int - Integer.
    long - Long.
    short - Short.
    double - Double.

    Los wrapper tienen la primera letra mayúscula.
    Varias de las wrapper descienten de una clase llamada Number.

    La ventaja de usar wrapper, es poder tener acceso a métodos.
    Evita que se utilice el casting. */

    public static void main(String[] args) {

        // Autoboxing (tipos primitivos a Object).
        Integer enteroObj = 10; /* Integer: Clase envolvente (wrapper) del tipo primitivo int. Permite la conversión
        automática. Existe una por cada tipo de dato primitivo. */
        Float floatObj = 15.2F;
        Double doubleObj = 40.1;

        System.out.println(enteroObj.intValue());
        // Para ver el valor de la variable.

        System.out.println(floatObj.intValue());

        // Unboxing.
        int entero = enteroObj;
        float flotante = floatObj;
        double doble = doubleObj;

        System.out.println(entero);

    }

}
