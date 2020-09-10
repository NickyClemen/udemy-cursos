package cpjlaboratoriofinal;

import java.util.Scanner;

import ar.com.ziraeal.peliculas.negocio.*;

public class CPJLaboratorioFinal {

    private static int opcion = -1;
    public static final Scanner entry = new Scanner(System.in);
    private static final String nombreArchivo = "C:\\Laboratorio\\listado-peliculas.txt";;
    private static final CatalogoPeliculas catalogoPeliculas = new CatalogoPeliculasImpl();

    public static void main(String[] args) {

        String nombrePelicula = null;
        String buscarPelicula = null;

        while(opcion != 0) {

            System.out.println(
                    "Elegí una opción: \n1) Iniciar catálogo de películas.\n"
                            + "2) Agregar película.\n"
                            + "3) Listar películas.\n"
                            + "4) Buscar película.\n"
                            + "0) Salir."
            );

            opcion = Integer.parseInt(entry.nextLine());

            switch(opcion) {

                case 0:
                    System.out.println("¡Gracias!");
                    break;
                case 1:
                    catalogoPeliculas.iniciarArchivo(nombreArchivo);
                    break;
                case 2:
                    System.out.println("Ingrese el nombre de una película: ");
                    nombrePelicula = entry.nextLine();
                    catalogoPeliculas.agregarPelicula(nombrePelicula, nombreArchivo);
                    break;
                case 3:
                    catalogoPeliculas.listarPeliculas(nombreArchivo);
                    break;
                case 4:
                    System.out.println("Ingrese un patrón de búsqueda: ");
                    buscarPelicula = entry.nextLine();
                    catalogoPeliculas.buscarPelicula(nombreArchivo, buscarPelicula);
                    break;
                default:
                    System.out.println("Opción incorrecta. Vuelva a intentarlo.");
                    break;

            }

            System.out.println("\n");

        }

    }

}
