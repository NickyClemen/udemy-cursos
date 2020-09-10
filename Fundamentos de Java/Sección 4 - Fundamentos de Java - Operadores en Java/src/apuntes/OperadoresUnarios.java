package apuntes;

public class OperadoresUnarios {

	public static void main(String[] args) {

		int a = 3;
		// Invertir signo de un entero.
		int b = -a;
		System.out.println(b);
		
		// Invertir un valor boolean.
		boolean c = true;
		boolean d = !c; // Operador de complemento para operaciones binarias (pasa de 0 a 1);
		System.out.println(d);
		
		// Operador de incremento.
		// Pre incremento.
		int e = 3;
		int f = ++e;
		System.out.println(e);
		System.out.println(f);
		/* En pre incremento, primero se incrementa el valor, y luego se asigna. */
		
		// Post incremento.
		int g = 5;
		int h = g++;
		System.out.println(g);
		System.out.println(h);
		/* En post incremento, primero se asigna el valor a la varibale, y luego se incrementa el valor. */
		
		// Operador de decremento.
		// Pre decremento.
		int i = 2;
		int j = --i;
		System.out.println(i);
		System.out.println(j);
		
		// Post decremento.
		int k = 4;
		int l = k--;
		System.out.println(k);
		System.out.println(l);
		
	}

}
