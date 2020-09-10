package apuntes;

import java.io.*;

public class ManejoArchivos {

    /* Creación de archivos en Java.
    Se utilizan las clases File, FileWriter y PrintWriter para crear archivos.
    FileWriter se utiliza para escribir información en un archivo.
    PrintWriter crea el archivo físicamente.

    Lecturas de archivos en Java
    Se utilizan las clases File, FileReader y BufferedReader.
    FileReader se utiliza para leer archivos.
    BufferedReader se utiliza para leer líneas completas.

    Anexar información a un archivo.
    La diferencia con la escritura, es la llamada FileWriter: Se le agrega un boolean que indica que se está agregando
    información, por lo que no se pierde el contenido original. */

    public static void main(String[] args) {

        // Escritura de archivos.
        // Primero se crea un archivo.
        File archivo = new File("C:\\prueba\\prueba.txt");

        try {

            PrintWriter salida = new PrintWriter(new FileWriter(archivo));
            // Si se usa FileWriter, se pierde la información que haya dentro del archivo.
            salida.close();

        } catch(IOException e) {

            e.printStackTrace();

        }

        System.out.println("El archivo ha sido creado correctamente.");

        // Lectura de un archivo.
        try {

            BufferedReader entrada = new BufferedReader(new FileReader(archivo));
            String lectura;
            lectura = entrada.readLine();

            while(lectura != null) {

                System.out.println(lectura);
                lectura = entrada.readLine();

            }

            entrada.close();

        } catch(FileNotFoundException e) {

            e.printStackTrace();

        } catch(IOException e) {

            e.printStackTrace();

        }

        // Anexando información a un archivo.
        try {

            PrintWriter salida = new PrintWriter(new FileWriter(archivo, true));
            String contenido = "Anexando información al archivo.";
            salida.println(contenido);
            salida.println();
            salida.println("Fin de anexar.");
            salida.close();

        } catch(IOException e) {

            e.printStackTrace();

        }

        System.out.println("Se ha anexado información correctamente.");

    }

}


