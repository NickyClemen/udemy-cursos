package apuntes;

public class Objetos {

	public static void main(String[] args) {
		
		/* Objetos
		Instancia de una clase -> A partir de una clase, se pueden crear objetos en concreto, a 
		partir de los cu�les, se puede trabajar (cambiar sus valores y llamar a sus m�todos). 
		Hay algunos casos en los que se puede trabajar directamente sobre la clase (contexto est�tico). 
		
		Creaci�n de un objeto en Java.
		Creaci�n de un objeto Persona:
			public class PersonaPrueba {
			
				public static void main(String args[]) {

					// Creaci�n de un objeto.
					(Se indica el tipo de la clase)Persona p1 = new Persona(); -> Para la creaci�n, se utiliza
					la palabra reservada new. Al '()' se lo conoce como constructor de la clase.
					Si no tiene argumentos, se llama constructor vac�o.

					new Persona(), hace referencia a una nueva instancia que se quiere crear de la clase Persona.
					Adem�s, se hace uso del concepto de "constructor de la clase".

					// Modificar valores.
					p1.nombre = "Nicole"; Con el operador '.', se liga el valor con el nombre del atributo de la clase.
					p1.apellidoPaterno = "Ordoqui";
					p1.apellidoMaterno = "Morales";
				
				}
			
			}

		M�s all� de la palabra new.
		Solicita un espacio de memoria de manera din�mica para poder almacenar un objeto.

		Sentencias		Creaci�n del objeto
		Persona p1 = new Persona();

		La memoria es finita, por lo que hay que tener cuidado al momento de crear objetos, ya que se puede
		colapsar en programa en tiempo de ejecuci�n.

		Uso de la clase String.
		Es posible omitir el uso de la palabra new. */

	}

}
