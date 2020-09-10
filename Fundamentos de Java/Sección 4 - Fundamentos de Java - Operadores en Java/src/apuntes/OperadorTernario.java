package apuntes;

public class OperadorTernario {

	public static void main(String[] args) {
		
		/* Operador ternario es una estructura de tipo condicional, la cuál nos va a ayudar a
		simplificar los IF. 
			
			int resultado = (expresion) ? true : false; 
			
		Puede retornar cualquier tipo de dato. */
		// boolean resultado = (1 > 2) ? true : false;
		// String resultado = (1 > 2) ? "Verdadero" : "Falso";
		var resultado = (1 < 2) ? "Verdadero" : false;
		
		System.out.println(resultado);

	}

}
