package ar.com.ziraeal.peliculas.datos;

import java.util.*;
import java.io.*;

import ar.com.ziraeal.peliculas.domain.Pelicula;

public class AccesoDatosImpl implements AccesoDatos {

    @Override
    public boolean existe(String nombreArchivo) {

        File archivo = new File(nombreArchivo);
        return archivo.exists();

    }

    @Override
    public List<Pelicula> listar(String nombreArchivo) {

        File archivo = new File(nombreArchivo);
        List<Pelicula> peliculas = new ArrayList<Pelicula>();

        try {

            BufferedReader entry = new BufferedReader(new FileReader(archivo));
            String lectura = null;

            lectura = entry.readLine();

            while(lectura != null) {

                Pelicula pelicula = new Pelicula(lectura);
                peliculas.add(pelicula);
                lectura = entry.readLine();

            }

            entry.close();

        } catch(FileNotFoundException e) {

            e.printStackTrace(System.out);

        } catch(IOException e) {

            e.printStackTrace(System.out);

        }

        return peliculas;

    }

    @Override
    public void escribir(Pelicula pelicula, String nombreArchivo, boolean anexar) {

        try {

            PrintWriter salida = new PrintWriter(new FileWriter(nombreArchivo, anexar));
            salida.println(pelicula.toString());
            salida.close();

            System.out.println("Se ha agregado contenido correctamente.");

        } catch (IOException e) {

            e.printStackTrace();

        }

    }

    @Override
    public String buscar(String nombreArchivo, String buscar) {

        File archivo = new File(nombreArchivo);
        String resultado = null;

        try {

            BufferedReader entry = new BufferedReader(new FileReader(archivo));
            String lectura = entry.readLine();
            int i = 0;

            while(lectura != null) {

                if(buscar != null || buscar.equalsIgnoreCase(lectura)) {

                    resultado = "La película " + lectura + " fue encontrada en la posición " + i + ".";
                    break;

                }

                lectura = entry.readLine();
                i++;

            }

            entry.close();

        } catch (FileNotFoundException e) {

            e.printStackTrace(System.out);

        } catch(IOException e) {

            e.printStackTrace(System.out);

        }

        return resultado;

    }

    @Override
    public void crear(String nombreArchivo) {

        File archivo = new File(nombreArchivo);

        try {

            PrintWriter salida = new PrintWriter(archivo);
            salida.close();

            System.out.println("El archivo ha sido creado exitosamente.");

        } catch (FileNotFoundException e) {

            e.printStackTrace();

        }

    }

    @Override
    public void borrar(String nombreArchivo) {

        File archivo = new File(nombreArchivo);

        archivo.delete();

        System.out.println("El archivo ha sido borrado.");

    }

}
