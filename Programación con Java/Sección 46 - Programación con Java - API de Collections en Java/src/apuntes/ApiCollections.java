package apuntes;

import java.util.*;

public class ApiCollections {

    /* Colección es un conjunto de datos que pueden no tener un ordenamiento en particular.
    Es muy similar al manejo de arrays. Las colecciones se conocen también como estructura de datos, ya que
    permiten almacenar la información de manera estructurada y formas variadas que en los arrays.
    Pueden tener cierto orden, y se pueden agregar más registros.
    Permite ir agregando datos conforme se vaya necesitando, de manera más dinámica.
    Puede tener métodos de ordenamiento, búsqueda, evitar valores duplicados (todo depende del tipo de collection
    que utilicemos).

    El API de collections se divide en:
        1) Set: Es una colección no ordenada de elementos. No se permiten elementos duplicados.
            a) HashSet.
        2) List (Interface): Colección de elementos ordenados. Permite elementos duplicados.
            a) ArrayList.
            b) Vector.
        3) Map: Una key value pair. Permite reutilizar código y ordenar los datos con algortimos existentes.
            a) HashMap.
    Una función hash, es una función con un algoritmo definido que convierte datos enteros, en un número entero
    (hash code: Devolver un valor entero combinando los valores de una clase, y así asignar un entero único a
    cada objeto que creamos).
    Hay clases de apoyo para trabajar con collections que son Enumeration e Iterator, y para comparar los elementos,
    se utiliza la interface Comparator. */

    public static void main(String[] args) {

        /* Si no se especifica, por default, se están agregando elementos de tipo object.
        No hace falta agregar la cantidad de elementos a agregar. */

        List miLista = new ArrayList();
        miLista.add(1);
        miLista.add(2);
        miLista.add(3);
        miLista.add(3);
        /* Se respeta orden en el que fueron creados los objetos.
        Acepta elementos repetidos. */

        Set miSet = new HashSet();
        miSet.add("100");
        miSet.add("200");
        miSet.add("300");
        miSet.add("300");
        /* Se respeta orden en el que fueron creados los objetos.
        No acepta elementos repetidos. Los ignora. */

        Map miMapa = new HashMap();
        miMapa.put("Nombre", "Nicole");
        miMapa.put("Apellido", "Ordoqui");
        miMapa.put("Apellido", "Ordoqui");
        /* No se respeta orden en el que fueron creados los objetos.
        Acepta elementos repetidos. Sobreescribe los agregados anteriormente. */

        imprimir(miLista);
        imprimir(miSet);

        // Hay que especificar qué se quiere mostrar.
        imprimir(miMapa.keySet()); // Se muestran las key.
        imprimir(miMapa.values()); // Se muestran los values.

        System.out.println(miMapa.get("Apellido")); // Muestra el value de la key.

    }

    private static void imprimir(Collection collection) {

        for(Object obj: collection) {

            System.out.println(obj);

        }

        System.out.println("");

    }

}
