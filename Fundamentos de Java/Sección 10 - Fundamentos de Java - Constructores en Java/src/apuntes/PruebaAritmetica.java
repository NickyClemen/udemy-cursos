package apuntes;

public class PruebaAritmetica {

	public static void main(String[] args) {
		
		Aritmetica aritmetica = new Aritmetica(10, 3); // -> Creación de instancia.
		
		/* Cambiar los valores de los atributos.
		aritmetica.a = 10;
		aritmetica.b = 10; */
		
		int resultado = aritmetica.sumar();
		
		System.out.println(resultado);
		
	}

}