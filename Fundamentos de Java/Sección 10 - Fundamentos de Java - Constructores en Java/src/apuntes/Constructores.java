package apuntes;

public class Constructores {

	/* Creación Objeto tipo Aritmetica
	 	-Sin inicializar valores (uso del constructor vacío).
	 	Aritmerica var = new Aritmetica();
	 	
	 Creación Objeto tipo Aritmetica
	 	-Inicializando valores.
	 	Aritmerica var = new Aritmetica(5, 10);
	 	
	 Java permite agregar valores a los objetos en el mismo momento en que se los crea.	
	 A ésto se lo llama constructor, y es un método que permite crear un objeto con lso valores que se
	 les pase. 
	 Son muy simulares a los métodos, pero tienen diferencias:
	 	1) Se pueden ejecutar solamente en el momento de la creación de un objeto. 
	 	2)  No devuelven ningún valor.
	 	3) El nombre del constructor debe ser idéntico al nombre de la clase. 
	 
	 Por defecto, se crea un constructor son argumentos (vacío). 
	 Es necesario para la creación del obejto. 
	 
	 Constructor: Inicializa un objeto al momento de la creación. Es el encargado de reservar en 
	 memoria la porción necesaria para la creación del objeto. 
	 
	 Forma general de un Constructor en Java:
	 NombreClase(args) {} Puede tener un modificador de acceso. 
	 
	 En Java, cuando se crean dos o más métodos con el mismo nombre, a ésta caractertística se lo llama
	 "sobrecarga de métodos" (overloading). Ésto significa, que al momento de crear un objeto, 
	 se tiene más opciones al momento de crearlo.
	 
	 Constructor sin argumentos:
	 	Aritmetica() {}
	 	
	 Constructor con argumentos:
	 	Aritmetica(args) {}
	 	
	 No se ve la palabra return en el constructor, porque lo que retorna es la referencia del
	 objeto en si mismo. Instanciamiento de manera dinámica. */

}
