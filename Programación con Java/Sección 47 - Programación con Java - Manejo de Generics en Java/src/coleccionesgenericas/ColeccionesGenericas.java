package coleccionesgenericas;

import java.util.*;

public class ColeccionesGenericas {

    public static void main(String[] args) {

        List<String> miLista = new ArrayList<String>();
        miLista.add("Nicole");
        miLista.add("Cirilla");
        miLista.add("Nicole");

        Set<String> miSet = new HashSet<String>();
        miSet.add("Nicole");
        miSet.add("Cirilla");
        miSet.add("Nicole");

        Map<String, String> miMapa = new HashMap<String, String>();
        miMapa.put("1", "Nicole");
        miMapa.put("2", "Cirilla");
        miMapa.put("3", "Ivan");

        imprimir(miLista);
        imprimir(miSet);
        imprimir(miMapa.keySet());
        imprimir(miMapa.values());

        System.out.println(miMapa.get("3"));

    }

    private static void imprimir(Collection<String> coleccion) {

        for(String element: coleccion) {

            System.out.println(element);

        }

        System.out.println("");

    }

}
