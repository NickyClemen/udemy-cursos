package apuntes;

public class PrecedenciaOperadores {

	public static void main(String[] args) {

		int x = 5;
		int y = 10;
		int z = ++x + y--;
		
		// Segundo ejemplo.
		int resultado = 4 + 5 * 6 / 3;
		
		System.out.println(x);
		System.out.println(y);
		System.out.println(z);
		System.out.println(resultado);
		
		/* Jerarqu�a. 
		1) Operadores unarios / Par�ntesis.
		2) Operadores aritm�ticos.
		 a) Multiplicaci�n.
		 b) Divisi�n.
		 c) Resto. 
		 d) Suma / Resta. */
		
	}

}
