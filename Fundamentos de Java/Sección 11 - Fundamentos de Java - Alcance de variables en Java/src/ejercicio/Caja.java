package ejercicio;

public class Caja {
	
	int ancho, alto, profundo;
	
	public Caja() {
		
		alto = 3;
		ancho = 2;
		profundo = 6;
		
	}
	
	public Caja(int ancho, int alto, int profundo) {
		
		this.ancho = ancho;
		this.alto = alto;
		this.profundo = profundo;
		
	}
	
	public int calcularVolumen() {
		
		return this.alto * this.ancho * this.profundo;
				
	}

}
