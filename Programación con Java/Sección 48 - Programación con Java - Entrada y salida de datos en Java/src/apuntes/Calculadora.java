package apuntes;

import java.util.Scanner;
import static calculadora.Operaciones.*;

public class Calculadora {

    public static void main(String[] args) {

        int a = 0;
        int b = 0;

        Scanner entry = new Scanner(System.in);

        System.out.println("Ingrese un valor: ");

        a = entry.nextInt();

        System.out.println("Ingrese un valor: ");

        b = entry.nextInt();
        // A diferencia de nextLine() que toma el enter, nextInt() no lo hace.

        System.out.println("El resultado es " + sumar(a, b) + ".");

    }

}
