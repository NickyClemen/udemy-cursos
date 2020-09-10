package test;

import java.io.*;

public class EntradaDatos {

    public static void main(String[] args) {

        String captura;

        InputStreamReader input = new InputStreamReader(System.in); // Lee caracter a caracter.
        BufferedReader brInput = new BufferedReader(input); // Lee una línea entera.

        System.out.println("Ingrese un valor: ");

        try {

            captura = brInput.readLine(); // Lee la línea completa que se ingrese por consola.
            System.out.println(captura);

        } catch (IOException e) {

            e.printStackTrace(System.out);

        }

    }

}
