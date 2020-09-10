package Apuntes;

public class TipoPrimitivoFloat {

	public static void main(String[] args) {
		
		float floatVar = 1000.10F;
		System.out.println("El valor de FloatVar es de " + floatVar + ".");
		/* Por default, los tipos flotantes son de tipo double.
		Se utiliza la 'F' para indicar que es de tipo float. */

		System.out.println("La cantidad de bits en un float es de " + Float.SIZE + " bits."); // 32 bits.
		System.out.println("La cantidad de bytes en un float es de " + Float.BYTES + " bytes."); // 4 bytes.
		System.out.println("El valor máximo de un float es de " + Float.MAX_VALUE + "."); // 3.4028235E38.
		System.out.println("El valor mínimo de un float es de " + Float.MIN_VALUE + "."); // 1.4E-45.
		
		double doubleVar = 100D;
		System.out.println("El valor de DoubleVar es de " + doubleVar + ".");
		// Se puede poner la 'D' para ser más específico con la literal.
	
		System.out.println("La cantidad de bits en un double es de " + Double.SIZE + " bits."); // 64 bits.
		System.out.println("La cantidad de bytes en un double es de " + Double.BYTES + " bytes."); // 8 bytes.
		System.out.println("El valor máximo de un double es de " + Double.MAX_VALUE + "."); // 1.7976931348623157E308.
		System.out.println("El valor mínimo de un double es de " + Double.MIN_VALUE + "."); // 4.9E-324.
		
	}

}
