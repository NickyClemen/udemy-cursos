package apuntes;

public class Aritmetica {
	
	// Atributos de la clase.
	/* Si el constructor está vacío, se le asigna valores por default.
	Si son de tipo primitivo, si es de tipo entero, es 0. Si es char, cero. Si es boolean, es false.
	Los tipo Object, es null. */
	int a;
	int b;
	
	// Debe llamarse igual que la clase.
	
	/* Constructor vacío. 
	public Aritmetica() {
			
		System.out.println("Ejecutando constructor vacío.");	
			
	} */
	
	/* Inicializa las variables de forma estática con un constructor vacío.
	public Aritmetica() {
		
		a = 5;
		b = 10;
		
	} */
	
	public Aritmetica(int argUno, int argDos) {
		
		a = argUno;
		b = argDos;
		
	}
	
	public int sumar() {
		
		int resultado = a + b;
		
		return resultado;
		
	} 
	
	/* Existen varios tipos de constructores:
	 	1) Vacío.
	 	
	A su vez, es un tipo de método especial, ya que únicamente se puede mandar a llamar cuando
	se crea un objeto. 
	Con la palabra reservada new, se llama al constructor de la clase. */

}
