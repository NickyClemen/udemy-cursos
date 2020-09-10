package apuntes;

public class OperadoresIgualdadRelacionales {

	public static void main(String[] args) {

		int a = 3, b = 2;
		
		// Operador de igualdad.
		// Operador de igualdad. Solamente debe usarse para tipos primitivos.
		boolean c = (a == b);
		System.out.println(c);
		
		// Operador de diferencia.
		boolean d = a != b;
		System.out.println(d);
		// No se deben usar cuando se trabaja con Object.
		
		// Comparar Object.
		String cadena = "Hola", cadenaDos = "Chau";
		System.out.println(cadena.equals(cadenaDos));
		
		// Operadores relacionales.
		// Menor.
		boolean e = a < b;
		System.out.println(e);
		
		// Mayor.
		boolean f = a > b;
		System.out.println(f);
		
		// Menor o igual.
		boolean g = a <= b;
		System.out.println(g);
				
		// Mayor o igual.
		boolean h = a >= b;
		System.out.println(h);
		
		// Si es par.
		if(b % 2 == 0) {
			
			System.out.println("Es par.");
			
		} else {
			
			System.out.println("Es impar.");
			
		}
				
	}

}
