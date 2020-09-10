package apuntes;

public class PrecedenciaEjercicio {

	public static void main(String[] args) {
		
		int a = 2;
		int b = 3;
		
		// int res = -3 + 6 / ++a * 4 - b-- + b;
		
		System.out.println("Unarios: 1) " + (++a) + "\n\t 2) " + (b--) + ".");
		System.out.println("División y multiplicación:\n\t 1) División: " + (6 / 3) + "\n\t 2) Multiplicación: " + (2 * 4) + ".");
		System.out.println("Suma y resta: " + ((-3) + 8 - 3 + 2) + ".");
	
	}

}
