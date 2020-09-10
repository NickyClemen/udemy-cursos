package apuntes;

public class Objetos {

	public static void main(String[] args) {
		
		/* Objetos
		Instancia de una clase -> A partir de una clase, se pueden crear objetos en concreto, a 
		partir de los cuáles, se puede trabajar (cambiar sus valores y llamar a sus métodos). 
		Hay algunos casos en los que se puede trabajar directamente sobre la clase (contexto estático). 
		
		Creación de un objeto en Java.
		Creación de un objeto Persona:
			public class PersonaPrueba {
			
				public static void main(String args[]) {

					// Creación de un objeto.
					(Se indica el tipo de la clase)Persona p1 = new Persona(); -> Para la creación, se utiliza
					la palabra reservada new. Al '()' se lo conoce como constructor de la clase.
					Si no tiene argumentos, se llama constructor vacío.

					new Persona(), hace referencia a una nueva instancia que se quiere crear de la clase Persona.
					Además, se hace uso del concepto de "constructor de la clase".

					// Modificar valores.
					p1.nombre = "Nicole"; Con el operador '.', se liga el valor con el nombre del atributo de la clase.
					p1.apellidoPaterno = "Ordoqui";
					p1.apellidoMaterno = "Morales";
				
				}
			
			}

		Más allá de la palabra new.
		Solicita un espacio de memoria de manera dinámica para poder almacenar un objeto.

		Sentencias		Creación del objeto
		Persona p1 = new Persona();

		La memoria es finita, por lo que hay que tener cuidado al momento de crear objetos, ya que se puede
		colapsar en programa en tiempo de ejecución.

		Uso de la clase String.
		Es posible omitir el uso de la palabra new. */

	}

}
