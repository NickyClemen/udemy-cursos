package apuntes;

import java.util.Scanner;

import java.util.Scanner;

public class MayorNumeros {

	public static void main(String[] args) {

		Scanner entry = new Scanner(System.in);
		
		int numUno, numDos;
		
		System.out.println("Ingrese un valor: ");
		
		numUno = entry.nextInt();
		
		System.out.println("Ingrese un valor a comparar: ");
		
		numDos = entry.nextInt();
		
		var resultado = numUno < numDos ?  "El n�mero mayor es el " + numDos : "El n�mero mayor es el " +  numUno;
		
		System.out.println(resultado);
		
	}

}
