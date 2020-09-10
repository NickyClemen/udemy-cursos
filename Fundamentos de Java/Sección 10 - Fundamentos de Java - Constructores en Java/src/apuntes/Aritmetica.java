package apuntes;

public class Aritmetica {
	
	// Atributos de la clase.
	/* Si el constructor est� vac�o, se le asigna valores por default.
	Si son de tipo primitivo, si es de tipo entero, es 0. Si es char, cero. Si es boolean, es false.
	Los tipo Object, es null. */
	int a;
	int b;
	
	// Debe llamarse igual que la clase.
	
	/* Constructor vac�o. 
	public Aritmetica() {
			
		System.out.println("Ejecutando constructor vac�o.");	
			
	} */
	
	/* Inicializa las variables de forma est�tica con un constructor vac�o.
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
	 	1) Vac�o.
	 	
	A su vez, es un tipo de m�todo especial, ya que �nicamente se puede mandar a llamar cuando
	se crea un objeto. 
	Con la palabra reservada new, se llama al constructor de la clase. */

}
