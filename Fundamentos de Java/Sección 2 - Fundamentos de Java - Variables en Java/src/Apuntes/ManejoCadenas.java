package Apuntes;

public class ManejoCadenas {

	public static void main(String[] args) {
	
		/* En Java, el manejo de String es de tipo Object.
		En Java, es necesario el uso del método new para crear un nuevo objeto. Sin embargo, cuando hablamos de String, no es 
		necesario: Se puede declarar un tipo String, y asignar un valor directamente (NO ES UN TIPO DE DATO PRIMITIVO).
		 	(Tratamiento especial - NO ES UN TIPO PRIMITIVO - Contexto String - No se necesita instanciar).
		 	String saludo = "Hola mundo"; -> Se declaran con comillas dobles.
		
		En Java, no se permite la sobrecarga de operadores (no se puede alterar la función de los operadores para hacer lo que se
		quiera).
		
		Excepción con los tipos String: Cuando se usa el operador '+', se crea un 'contexto String', por lo que en lugar de sumar, concatena 
		los valores de la operación. 
		
		Para comparar objetos, no se utiliza el '==' como se hace con los tipos primitivos, sino que se utiliza el método equals().
			saludo.equals("Hola Mundo"); -> Permite comparar el contenido de la cadena. 
		 
		Caracteres de escape al utilizar String.
			1) \t: Inserta tab.
			2) \b: Inserta un retroceso (backspace).
			3) \n: Inserta un alínea nueva.
			4) \r: Inserta un retorno de carro.
			5) \f: Se mueve a la sigueinte página (form feed). Se utiliza para impresoras, no en consola.
			6) \': Inserta una comilla simple.
			7) \": Inserta una comilla doble.
			8) \\: Inserta una barra invertida. */
		
	}

}
