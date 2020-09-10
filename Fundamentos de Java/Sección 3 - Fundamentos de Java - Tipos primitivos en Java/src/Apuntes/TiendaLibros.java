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
		
		System.out.println("Ingres� el ID: ");
		id = Integer.parseInt(entry.nextLine());
		
		System.out.println("Ingres� el nombre: ");
		nombre = entry.nextLine();
		
		System.out.println("Ingres� el precio: ");
		precio = Double.parseDouble(entry.nextLine());
		
		System.out.println("Ingres� un s�mbolo: ");
		simbolo = entry.nextLine().charAt(0);
		
		System.out.println("Ingres� si tiene env�o gratis: ");
		envio = entry.nextBoolean();
		
		System.out.println("Los datos ingresados son: ");
		
		System.out.println(nombre + " #" + id);
		System.out.println("El precio es de " + simbolo + precio);
		
		if(envio) {
			
			System.out.println("�Tiene env�o gratis? S�.");
			
		} else {
			
			System.out.println("�Tiene env�o gratis? No.");
			
		}
		
		
		System.out.println("Fin del programa.");
		
	}

}
