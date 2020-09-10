package Apuntes;

import java.util.Scanner;

public class TiendaLibros {

	public static void main(String[] args) {
		
		Scanner entry = new Scanner(System.in);
		
		int id;
		String nombre;
		double precio;
		char simbolo;
		boolean envio;
		
		System.out.println("Inicio del programa.");
		
		System.out.println("Ingresá el ID: ");
		id = Integer.parseInt(entry.nextLine());
		
		System.out.println("Ingresá el nombre: ");
		nombre = entry.nextLine();
		
		System.out.println("Ingresá el precio: ");
		precio = Double.parseDouble(entry.nextLine());
		
		System.out.println("Ingresá un símbolo: ");
		simbolo = entry.nextLine().charAt(0);
		
		System.out.println("Ingresá si tiene envío gratis: ");
		envio = entry.nextBoolean();
		
		System.out.println("Los datos ingresados son: ");
		
		System.out.println(nombre + " #" + id);
		System.out.println("El precio es de " + simbolo + precio);
		
		if(envio) {
			
			System.out.println("¿Tiene envío gratis? Sí.");
			
		} else {
			
			System.out.println("¿Tiene envío gratis? No.");
			
		}
		
		
		System.out.println("Fin del programa.");
		
	}

}
