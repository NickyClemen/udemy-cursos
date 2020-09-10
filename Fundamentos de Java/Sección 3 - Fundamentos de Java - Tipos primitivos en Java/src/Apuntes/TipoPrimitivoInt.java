package Apuntes;

public class TipoPrimitivoInt {

	public static void main(String[] args) {
		
		/* Tipos primitivos de tipo entero:
		 	a) byte.
		 	b) short.
		 	c) int.
		 	d) long. */
		
		// Byte.
		byte byteVar = 127;
		/* Un literal es lo que se está escribiendo del lado derecho. Por default, son de tipo entero.
		Cuando cumple con el máximo o el mínimo, se puede asignar al tipo de dato. */
		System.out.println("ByteVar es igual a " + byteVar + ".");
		/* Puede haber pérdida de información por incompatibilidad de tipo de dato entre int (32 bits)
		y byte (8 bits). */
		
		// Revisar el espacio que ocupa un tipo de dato.
		// Cantidad de bits.
		System.out.println("La cantidad de bits en un bytes es de " + Byte.SIZE + "."); // Tiene 8 bits.
		// Cantidad de bytes.
		System.out.println("La cantidad de bytes en un byte es de " + Byte.BYTES + "."); // Puede almacenar 1 byte.
		// Valor mínimo.
		System.out.println("El valor mínimo es de " + Byte.MIN_VALUE + "."); // -128.
		// Valor máximo.
		System.out.println("El valor mínimo es de " + Byte.MAX_VALUE + "."); // 127.
		
		// Short.
		short shortVar = 32767;
		System.out.println("ShortVar es igual a " + shortVar + ".");
		
		// Revisar el espacio que ocupa un tipo de dato.
		// Cantidad de bits.
		System.out.println("La cantidad de bits en un short es de " + Short.SIZE + "."); // Tiene 16 bits.
		// Cantidad de bytes.
		System.out.println("La cantidad de bytes en un short es de " + Short.BYTES + "."); // Puede almacenar 2 byte.
		// Valor mínimo.
		System.out.println("El valor mínimo es de " + Short.MIN_VALUE + "."); // -32768.
		// Valor máximo.
		System.out.println("El valor mínimo es de " + Short.MAX_VALUE + "."); // 32767.
		
		// Int.
		int intVar = 2147483647;
		// Si se pone un entero más grande, no devuelve un error de incompatibilidad, sino que es demasiado largo.
		System.out.println("IntVar es igual a " + intVar + ".");
		
		// Revisar el espacio que ocupa un tipo de dato.
		// Cantidad de bits.
		System.out.println("La cantidad de bits en un int es de " + Integer.SIZE + "."); // Tiene 32 bits.
		// Cantidad de bytes.
		System.out.println("La cantidad de bytes en un int es de " + Integer.BYTES + "."); // Puede almacenar 4 byte.
		// Valor mínimo.
		System.out.println("El valor mínimo es de " + Integer.MIN_VALUE + "."); // -2147483648.
		// Valor máximo.
		System.out.println("El valor mínimo es de " + Integer.MAX_VALUE + "."); // 2147483647.
		
		// Long.
		long longVar = 9223372036854775807L;
		/* Los literales en Java, si no se establece otra cosa, son de tipo entero (su valor máximos será de 2147483647).
		Para salvar el error de que el entero es demasiado grande, se le pone al final una 'L', que indica que es un long.
		Tener cuidado, porque una cosa es el tipo de dato, y otra el literal con el que se está trabajando. 
		Con una 'F' se transforma en float, y con una 'D' se transforma en double. */
		System.out.println("LongVar es igual a " + longVar + ".");
		
		// Revisar el espacio que ocupa un tipo de dato.
		// Cantidad de bits.
		System.out.println("La cantidad de bits en un long es de " + Long.SIZE + "."); // Tiene 64 bits.
		// Cantidad de bytes.
		System.out.println("La cantidad de bytes en un int es de " + Long.BYTES + "."); // Puede almacenar 8 bytes.
		// Valor mínimo.
		System.out.println("El valor mínimo es de " + Long.MIN_VALUE + "."); // -9223372036854775808.
		// Valor máximo.
		System.out.println("El valor mínimo es de " + Long.MAX_VALUE + "."); // 9223372036854775807.
		
		// Cuando se trabaja con var, solamente se puede usar int y long, no short y byte.
		var numeroInt = 2147483647;
		var numeroLong = 2147483648L;
		
		System.out.println("numeroInt es igual a " + numeroInt + ".");
		System.out.println("numeroLong es igual a " + numeroLong + ".");
			
	}

}
