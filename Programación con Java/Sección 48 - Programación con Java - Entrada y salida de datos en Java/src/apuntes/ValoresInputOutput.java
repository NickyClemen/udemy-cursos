package apuntes;

public class ValoresInputOutput {

    /* Hay clases para hacer lectura de entrada y salida de datos, tanto la standard (consola), como archivos,
    flujos y otros tipos de entrada y salidas de información.

    Entrada y salida de datos. Consola (standard)
        1) System.in: Lee la variable standard. Es de tipo input string (lee del teclado).
        2) System.out: Escribe la variable standard. Es de tipo print string.
        3) System.err: Salida standard de errores. Es de tipo print string.

    API de entrada en Java.
    En el paquete java.io tiene dos clases para la lectura de input.

        1) java.lang.Object
            a) Reader (Tipo char)
                1) InputStreamReader: Accede a la consola standard (hace la lectura con System.in). Lee un caracter
                a la vez.
                    a) FileReader
                2) BufferedReader: Permite capturar una línea completa de datos.
            b) InputStream (Tipo byte)
                1) FilterInputStream
                    a) DataInputStream
                    b) BufferedInputStream

     API de salida en Java

        1) java.lang.Object
            a) Writer (Tipo char)
                1) PrintWriter
                2) OutputStreamWriter
                    a) FileWriter
                3) BufferedWriter
                    a) PrintStream
            b) OutputStream (Tipo byte)
                1) FilterOutputStream
                    a) BufferedOutputStream
                    b) DataOutputStream

     Diferencia entre flujos char y byte
     Tiene que ver el tipo de dato con el cuál se está trabajando.
     Los flujos (streams), son utilizados para procesar un byte a la vez.
     Los streams que procesan bytes, son recomendados para procesar archivos binarios (Word, Excel, pdf o cualquiera
     que sea más complejo que un simple archivo de texto).
     Por otro lado, las clases de tipo Reader/Writer, son utilizadas para procesar un caracter a la vez, y son
     recomendadas para procesar textos basados en algún juego de caracteres como el el Ascii o el Unicode.
     Las clases que tienen Buffered, son para procesar más de un caracter o byte a la vez.

        char                                                                 bytes
            Programa <- Flujo (BufferedInputStream) <- isr (InputStreamReader) <- in (PrintStream) <- teclado

     Lectura entrada standard en Java
     Se utiliza System.in.

     Clase Scanner para leer datos
     Existe para simplicar el proceso de lectura de datos. Recibe en el constructor el tipo de entrada.

     */

}
