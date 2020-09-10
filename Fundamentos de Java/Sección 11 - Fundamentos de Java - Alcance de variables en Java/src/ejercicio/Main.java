package ejercicio;

public class Main {

	public static void main(String[] args) {
		
		Caja box = new Caja(3, 2, 6);
		
		int volumen = box.calcularVolumen();
		
		System.out.println("El volumen de la caja es de " + volumen + ".");

	}

}
