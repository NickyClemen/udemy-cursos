package apuntes;

public class OperadoresAritmeticos {

	public static void main(String[] args) {
		
		/* Un operador, es un s�mbolo que utiliza dos operandos para realizar una operaci�n. */
		int a = 3;
		int b = 2;
		
		int suma = a + b;
		int resta = a - b;
		int multiplicacion = a * b;
		double division = 3D / b; /* Hay que indicar que uno de los operandos, es flotante, sino, devuelve
		un entero.a */
		int resto = a % b;
		
		System.out.println("El resultado de la suma es de " + suma + ".");
		
		/* Al crearse un contexto de string, el operador concatena, no suma.
		Para indicar que se haga la suma, habr�a que poner la operaci�n entre par�ntesis (operador de
		mayor prioridad en Java). */
		System.out.println("El resultado de la suma es de " + (a + b) + ".");
		
		System.out.println("El resultado de la resta es de " + resta + ".");
		/* Cuando se trabaja con el contexto string, y se encuentra con el signo de resta, da error
		porque no los puede concatenar. */
		System.out.println("El resultado de la resta es de " + (a - b) + ".");

		System.out.println("El resultado de la multiplicaci�n es de " + multiplicacion + ".");
		
		System.out.println("El resultado de la divisi�n es de " + division + ".");
		
		System.out.println("El resto de la divisi�n es de " + resto + ".");
		
	}

}
