package Apuntes;

import java.util.Scanner;

public class MetodoScanner {

	public static void main(String[] args) {
		
		/* Valor en código duro: Valor fijo de la variable (variables estático). */
		Scanner entry = new Scanner(System.in);
		// System.in sirve para leer información en la consola.
		
		System.out.print("Ingresá tu nombre:");
		
		String user = entry.nextLine();
		// Lee una línea entera de la consola.
		
		System.out.print("El usuario es " + user + ".");
		
		entry.close();
		

	}

}
