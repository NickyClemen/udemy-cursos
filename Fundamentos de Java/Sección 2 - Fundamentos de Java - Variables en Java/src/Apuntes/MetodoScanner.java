package Apuntes;

import java.util.Scanner;

public class MetodoScanner {

	public static void main(String[] args) {
		
		/* Valor en c�digo duro: Valor fijo de la variable (variables est�tico). */
		Scanner entry = new Scanner(System.in);
		// System.in sirve para leer informaci�n en la consola.
		
		System.out.print("Ingres� tu nombre:");
		
		String user = entry.nextLine();
		// Lee una l�nea entera de la consola.
		
		System.out.print("El usuario es " + user + ".");
		
		entry.close();
		

	}

}
