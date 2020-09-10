package apuntes;

import ar.com.javadoc.*;

/** @author nicole.ordoqui.sp
 * @version 1.0
 * Clase de prueba de la clase Aritmética. */

public class ManejoJavaDoc {

    /** Método que ejecuta la prueba de la clase Artimética.
     * @param args de un arreglo de tipo String. */

    public static void main(String[] args) {

        Aritmetica aritmetica = new Aritmetica(3, 2);
        int resultado = aritmetica.suma();

        System.out.println("El resultado es " + resultado + ".");

    }

    /* JavaDoc en Java.
    Documento HTML que permite mostrar la documentación de las clases en Java.
    Para que los comentarios sean agregados al documento, los comentarios tienen que tener el siquiente
    formato:
        '/** Comentario./'

    Caracteres de escape para string.
    Se pueden agregar algunos detalles:
        @author: Nombre del autor del programa.
        @deprecated: Indica que el elemento es obsoleto, pertenece a versiones anteriores, y no es recomendable
        su uso.
        @param: Definción de un parámetro de un método.
        @version: Versión del método o clase.
        @see: Indica que se asocia con otro método o clase.
        @return: Descripción de lo que devuelve el método. No se usa en constructores o métodos void. */

}
