package ar.com.ziraeal.peliculas.negocio;

import java.util.*;

import ar.com.ziraeal.peliculas.datos.AccesoDatos;
import ar.com.ziraeal.peliculas.datos.AccesoDatosImpl;
import ar.com.ziraeal.peliculas.domain.Pelicula;

public class CatalogoPeliculasImpl implements CatalogoPeliculas {

    private final AccesoDatos accesoDatos;

    public CatalogoPeliculasImpl() {

        this.accesoDatos = new AccesoDatosImpl();

    }

    @Override
    public void agregarPelicula(String nombrePelicula, String nombreArchivo) {

        Pelicula pelicula = new Pelicula(nombrePelicula);
        boolean anexar = false;

        anexar = accesoDatos.existe(nombreArchivo);

        accesoDatos.escribir(pelicula, nombreArchivo, anexar);

    }

    @Override
    public void listarPeliculas(String nombreArchivo) {

        List<Pelicula> peliculas = accesoDatos.listar(nombreArchivo);

        for(Pelicula pelicula : peliculas) {

            System.out.println("Película: " + pelicula + ".");

        }

    }

    @Override
    public void buscarPelicula(String nombreArchivo, String buscar) {

        String resultado = accesoDatos.buscar(nombreArchivo, buscar);

        System.out.println(resultado);

    }

    @Override
    public void iniciarArchivo(String nombreArchivo) {

        if(accesoDatos.existe(nombreArchivo)) {

            accesoDatos.borrar(nombreArchivo);
            accesoDatos.crear(nombreArchivo);

        }

        accesoDatos.crear(nombreArchivo);

    }

}
