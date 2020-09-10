// Nombre del paquete.
package apuntes;

/* Import de la clase. Tiene que ir antes de la definición de la clase.
import ar.com.zireael.Utileria; */

/* Importa todas las clases del paquete.
import ar.com.zireael.*; */

import static ar.com.zireael.Utileria.imprimir;

public class PaquetesJava {

    public static void main(String[] args) {

        /* Nombre completamente calificado (Fully Qualified Name).
        ar.com.zireael.Utileria.imprimir("Hola"); */

        /* Import de la clase.
        Utileria.imprimir("Hola, hola."); */

        // Import del método estático.
        imprimir("Hola, hola.");

    }

    /* Los paquetes en Java permiten organizar las clases. Permite agrupar clases ya sea por su función,
    herencia o cualquier características (normalmente se organizan por las funciones que tienen en el
    programa).
    Permiten evitar conflictos entre nombres.
    Limitan el acceso a clases.
    Hay una biblioteca de paquetes ya existentes.

    Convención en el nombre de los paquetes
        1) Todo el nombre tiene que estar en minúsculas.
        2) Se acostumbra a escribir el nombre del dominio web de manera invertida. Ejemplo: Si el nombre del
        dominio es example.com.ar, entonces el nombre del paquete sería ar.com.example
        3) Y si hay un proyecto, se agrega el nombre al final: ar.com.example.proyecto
        4) Subpaquetes: ar.com.example.section.proyecto

            package com.gm; // Definición del paquete.

            public class Utileria {

                public static void imprimir(String s) {

                    System.out.println("Mensaje " + s + ".");

                }

            }

            import com.gm.*; // Se importa el paquete.
            Con el asterisco, importa todas las clases el paquete.
            Java recomienda que cada clase esté en un paquete.

            public class EjemploPaquetes {

                public static void main(String[] args) {

                    Utileria.imprimir("Hola"); -> Se utiliza la clase importada.

                }

            }

      Import estático.

            package com.gm; // Definición del paquete.

            public class Utileria {

                public static void imprimir(String s) {

                    System.out.println("Mensaje " + s + ".");

                }

            }

            import static com.gm.Utileria.imprimir; // Import estático para llamar directamente el método.

            public class EjemploPaquetes {

                public static void main(String[] args) {

                   imprimir("Hola");

                }

            }

        Paquetes más importantes de Java SE

            1) java.lang: Contiene clases esenciales (las clases core).
            Se importa implícitamente sin necesidad de la sentencia import.
            2) java.util: Contiene clases como la clase Date, ente muchas clases utilitarías comunes en Java.
            3) java.io: input/output-Entrada/Salida. Clases que definen distintos flujos de datos.
            4) java.net: Se usa en combinación con las clases del paquete java.io para leer y/o escribir datos
            en la red.
            5) java.applet: Contiene las claaes necesarias para crear applets y se ejecutan en la ventana del navegador.
            6) java.awt: Contiene clases para crear una aplicación GUI (Graphic User Interface) independiente de la
            plataforma.


        */

}
