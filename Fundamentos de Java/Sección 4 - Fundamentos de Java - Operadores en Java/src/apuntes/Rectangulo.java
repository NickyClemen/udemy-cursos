package apuntes;

import java.util.Scanner;

public class Rectangulo {

	public static void main(String[] args) {
		
		Scanner entry = new Scanner(System.in);
		
		int ancho;
		int alto;
		
		System.out.println("Inicio del programa.");
		
		System.out.println("Ingrese el alto del rect�ngulo: ");
		alto = entry.nextInt();

		System.out.println("Ingrese el ancho del rect�ngulo: ");
		ancho = entry.nextInt();
		
		System.out.println("El �rea del rect�ngulo es de " + (alto * ancho) + ".");
		
		System.out.println("El per�metro del rect�ngulo es de " + ((alto + ancho) * 2) + ".");
		
		System.out.println("Fin del programa.");
		
	}

}
