package apuntes;

import java.io.*;

public class Archivo {

    public static void crearArchivo(String nombreArchivo) {

        File archivo = new File(nombreArchivo);

        try {

            PrintWriter salida = new PrintWriter(archivo);
            salida.close();
            System.out.println("Se ha creado el archivo correctamente.");

        } catch (FileNotFoundException e) {

            e.printStackTrace(System.out);

        }

    }

    public static void escribirArchivo(String nombreArchivo) {

        File archivo = new File(nombreArchivo);

        try {

            PrintWriter salida = new PrintWriter(archivo);
            String contenido = "Contenido de prueba para el archivo.";
            salida.println(contenido);
            salida.println();
            salida.println("Fin de la actualización.");
            salida.close();

            System.out.println("Se ha actualizado el archivo correctamente.");

        } catch (FileNotFoundException e) {

            e.printStackTrace(System.out);

        }

    }

    public static void leerArchivo(String nombreArchivo) {

        File archivo = new File(nombreArchivo);

        try {

            BufferedReader entrada = new BufferedReader(new FileReader(archivo));
            String lectura = entrada.readLine();

            while(lectura != null) {

                System.out.println(lectura);
                lectura = entrada.readLine();

            }

            entrada.close();

        } catch (FileNotFoundException e) {

            e.printStackTrace();

        } catch (IOException e) {

            e.printStackTrace();
        }

    }

    public static void anexarInformacion(String nombreArchivo) {

        File archivo = new File(nombreArchivo);

        try {

            PrintWriter salida = new PrintWriter(new FileWriter(archivo, true));
            String contenido = "Anexando información al archivo.";
            salida.println(contenido);
            salida.println();
            salida.close();

            System.out.println("Se ha anexado la información exitosamente.");

        } catch(FileNotFoundException e) {

            e.printStackTrace(System.out);

        } catch(IOException e) {

            e.printStackTrace(System.out);

        }

    }

}
