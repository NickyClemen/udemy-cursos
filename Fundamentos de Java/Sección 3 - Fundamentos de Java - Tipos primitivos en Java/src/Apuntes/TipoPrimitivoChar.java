package Apuntes;

public class TipoPrimitivoChar {

	public static void main(String[] args) {
		
		char varChar = 'A';
		/* Soporta �nicamente un caracter. 
		Se declara con comillas simplmes (si fuese cadena, ser�a ""). 
		Para imprimir un caracter, se puede usar tanto unicode, como su valor decimal. */
		char unicode = '\u0021'; /* -> Le indica a Java que es un caracter de tipo unicode. 
		Se puede utilizar con var. */
		char decimal = 33; /* Entiende que debe imprimir el valor char. No se puede utilizar var, ya que
		entiende el caracter como un entero. */
		char symbol = '!';
		System.out.println("El valor de VarChar es de " + varChar + ".");
		System.out.println("El valor de Unicode es de " + unicode + ".");
		System.out.println("El valor de Decimal es de " + decimal + ".");
		System.out.println("El valor de Symbol es de " + symbol + ".");
		
		System.out.println("La cantidad de bits en un char es de " + Character.SIZE + " bits."); // 16 bits.
		System.out.println("La cantidad de bytes en un char es de " + Character.BYTES + " bytes."); // 2 bytes.
		System.out.println("El valor m�ximo de un char es de " + Character.MAX_VALUE + ".");
		System.out.println("El valor m�nimo de un char es de " + Character.MIN_VALUE + "."); 
		/* El valor m�nimo depende de la plataforma en la que se est� trabajando, ya que MIN y MAC dependen
		de la tabla UNICODE, el cu�l, puede variar entre sistemas operativos. 
		En �ste caso, en m�nimo es de NULL, y el m�ximo '?'. */

	}

}
