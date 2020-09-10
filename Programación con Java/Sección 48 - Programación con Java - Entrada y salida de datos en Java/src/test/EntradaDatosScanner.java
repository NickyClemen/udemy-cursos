package test;

import java.util.Scanner;

public class EntradaDatosScanner {

    public static void main(String[] args) {

        String captura = null;

        Scanner scanner = new Scanner(System.in);

        System.out.println("Ingrese un  valor: ");

        captura = scanner.nextLine(); // Lee la línea completa.

        while(!"salida".equals(captura)) {

            System.out.println("Ingrese un  valor: ");

            captura = scanner.nextLine();

        }

        System.out.println(captura);

    }

}
