package apuntes;

public class Aritmetica {
	
	int a;
	int b;
	
	public Aritmetica() {
			
		System.out.println("Ejecutando constructor vacío.");	
			
	} 
	
	public Aritmetica(int a, int b) {
		
		this.a = a;
		this.b = b;
		
	}
	
	public int sumar() {
		
		return this.a + this.b;
		/* Por más que no genere ambiguedad, es buena práctica colocar el this para diferenciar
		que variables son locales con respecto a atributos de clase. */
		
	} 
	
	public int restar() {
		
		return this.a - this.b;
		
	}
	
	public int multiplicar() {
		
		return this.a * this.b;
		
	}

	public int dividir() {
	
		return this.a / this.b;
	
	}

	public int resto() {
	
		return this.a % this.b;
	
	}
	
}
