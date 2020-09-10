package apuntes;

import java.util.Scanner;

public class Rectangulo {

	public static void main(String[] args) {
		
		Scanner entry = new Scanner(System.in);
		
		int ancho;
		int alto;
		
		System.out.println("Inicio del programa.");
		
		System.out.println("Ingrese el alto del rectángulo: ");
		alto = entry.nextInt();

		System.out.println("Ingrese el ancho del rectángulo: ");
		ancho = entry.nextInt();
		
		System.out.println("El área del rectángulo es de " + (alto * ancho) + ".");
		
		System.out.println("El perímetro del rectángulo es de " + ((alto + ancho) * 2) + ".");
		
		System.out.println("Fin del programa.");
		
	}

}
