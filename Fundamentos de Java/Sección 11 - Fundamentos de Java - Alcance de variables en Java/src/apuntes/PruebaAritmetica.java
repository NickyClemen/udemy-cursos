package apuntes;

public class PruebaAritmetica {

	public static void main(String[] args) {
			
		// Variables locales.
		int numUno = 6, numDos = 2;
		
		Aritmetica objeto = new Aritmetica(numUno, numDos);
		
		int suma = objeto.sumar(), 
		resta = objeto.restar(), 
		multiplicacion = objeto.multiplicar(),
		division = objeto.dividir(),
		resto = objeto.resto();
		
		System.out.println("El número uno es " + numUno + ".");
		System.out.println("El número dos es " + numDos + ".");
		
		System.out.println("El resultado de la suma es " + suma + ".");
		System.out.println("El resultado de la resta es " + resta + ".");
		System.out.println("El resultado de la multiplicación es " + multiplicacion + ".");
		System.out.println("El resultado de la división es " + division + ".");
		System.out.println("El resultado del resto es " + resto + ".");
		
	}
	
}