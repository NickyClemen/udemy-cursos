package Apuntes;

import java.util.Scanner;

public class ConversionTipoPrimitivo {

	public static void main(String[] args) {
		
		// String a Int.
		int edad = Integer.parseInt("20");
		System.out.println("El valor de la variable edad es de " + edad + ".");
		
		// String a double.
		double valorPI = Double.parseDouble("3.1416");
		System.out.println("El valor de la variable valorPI es de " + valorPI + ".");
		
		/* No hay una conversión de string a tipo char, ya que el string tienen varios
		caracteres, y char solamente puede almacenar uno. */
		char c = "Hola.".charAt(3);
		/* Con charAt(), se aisla el caracter de la cadena que se quiere almacenar. */
		System.out.println("El valor de la variable C es de '" + c  + "'.");
		
		/* Se utiliza nextLine() en la clase Scanner para capturar por consola las entradas, pero 
		regresa strings. */
		
		// Conversión de valores por teclado.
		Scanner scanner = new Scanner(System.in);
		System.out.println("Ingrese su edad: ");
		edad = Integer.parseInt(scanner.nextLine());
		System.out.println("El valor de la variable edad es de " + edad + ".");
		
		// Recuperar un caracter.
		System.out.println("Ingrese una cadena: ");
		char caracter = scanner.nextLine().charAt(0);
		System.out.println("El valor de la variable caracter es de '" + caracter  + "'.");
		
		// Convertir entero a string.
		String texto = String.valueOf(25);
		System.out.println("El valor de la variable texto es de " + texto  + ".");
		
		// Casting -> Conversión entre tipos.
		short s = 10;
		byte b = (byte) s;
		/* Hay que tener cuidado al hacerlo, ya que puede probocar pérdida de información. */
		
	}

}
