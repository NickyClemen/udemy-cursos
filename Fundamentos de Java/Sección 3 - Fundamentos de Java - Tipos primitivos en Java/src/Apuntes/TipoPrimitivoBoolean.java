package Apuntes;

public class TipoPrimitivoBoolean {

	public static void main(String[] args) {
		
		/* A diferencia de otros tipos de dato, el boolean no tiene definido cuantos bits ocupa,
		ya que depende de la plataforma y del sistema operativo en el que se está trabajando, ya que un
		true o flase, pueden ocupar 32 o 64 bits. */
		
		// Valores que almacena una varoable de tipo boolean.
		System.out.println("TRUE: " + Boolean.TRUE + ".");
		System.out.println("TRUE: " + Boolean.FALSE + ".");
		
		/* Permite ejecutar algoritmos y funciones.
		No hace falta crear una variable; se le puede asignar el valor de la constante.
		Se utilizan mucho para la toma de decisiones. */
		boolean booleanVar = true;
		
		if(booleanVar) {
			
			System.out.println("El valor es verdadero.");
			
		} else {
			
			System.out.println("El valor es falso.");
			
		}
		
		int edad = 30;
		boolean esAdulto = edad >= 18;
		System.out.println(esAdulto);
		// Se puede utilizar el inicializador de tipo var.
		
	}

}
