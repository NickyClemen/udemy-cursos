package apuntes;

import domain.Division;
import domain.OperacionExcepcion;

public class ManejoExcepciones {

    /* Excepciones en Java
    Una excepción es una situación inesperada en la ejecución de un programa.

    Tipos de excepciones en la API de Java
        1) Check exception: Funciones que heredan de la clase Exception. Un ejemplo, es SQLException (excepciones
        en base de datos). Se procesan en un bloque try-catch o en el cuerpo del método.
        2) Uncheck exception: Funciones que heredan de la clase RuntimeException. No es obligatorio procesarlas.
        Se las conoce como excepciones en tiempo de ejecución. Un ejemplos, es NullPointerException.

     Sintaxis de manejo de excepciones
        try: Código que arroja la excepción.
        catch: Procesa la excepción. Se pueden utilizar distintos catch. Cuando hagan varios catch, pero se procesa
        la de menor jerarquía.
        finally es opciones, y se ejecuta siempre, aunque no ocurra la excepción.
        Para tipos uncheck (RuntimeException), es opcional.

     Los más comunes, son RuntimeException y Exception. Errores de código.
     Si cae en Error, lo tira la máquina virtual de Java, y no se puede recuperar de eso.

     Stacktrace de errores: Rastreador de errores. Registro de log.

    Throws: Permite especificar el tipo de excepción que arroja un método.
    Las excepciones que descienden de Exception, se está obligados a declararlos en el método que
    tira la excepción (esto si no se usa try-catch).
    Se pueden crear errores RuntimeExcepcion para no obligar a declarar los errores.

    Se puede heredar clases hijas de clases de excepciones custom. La idea es crear es crear el códig más genérico
    posible.

    Uso de excepciones en la sobrecarga de métodos.
        Un método que sobreescribe a un método padre que declara una excepción, puede hacer:
            a) No arrojar ninguna excepción.
            b) Arrojar una o más excepciones que sean subclases de la excepción padre (tienen que ser subclases,
            no superclases).
            c) No puede arrojar excepciones adicionales. */

    public static void main(String[] args) {

        try {

            Division division = new Division(10, 0);

        } catch(OperacionExcepcion e) {

            System.out.println(e.getMessage()); // Solicita el mensaje de error.
            e.printStackTrace(); // Muestra el Stacktrace.

        }

    }

}
