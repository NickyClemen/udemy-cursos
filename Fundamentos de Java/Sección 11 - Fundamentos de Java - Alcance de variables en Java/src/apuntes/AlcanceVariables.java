package apuntes;

public class AlcanceVariables {
	
	/* Palabra this.
	Se utiliza apara hacer referencia la objeto con el que se est� trabajando.
	this es un operador que nos permite referenciar al objeto que se est� trabajando. Sirve
	para acceder a los atributos y m�todos de una clase. Con �sto, se puede hacer una diferencia
	entre los argumentos recibidos en un m�todo, y los atributos de una clase. 
	
		public Aritmetica(int a, int b) {
		
			this.a = a;
			this.b = b;
			El argumento y el atributo se llaman igual, por lo que toma prioridad el argumento
			por sobre el atributo de la clase. Se lo llama "ocultamiento del atributo de la clse".
			Para solucionarlo, se coloca el this antes del atributo.
		
		}
		
	Alcance de una variable.
	
		1) Variables de clase: Pertenecen a la clase.
			a) Pueden usarse en cualquier m�todo de la clase.
			b) Se inicializan con valores por default.
		2) Variables locales: 
			a) Se pueden usar s�lo en el m�todo en el que se definen.
			b) Se deben inicializar (no se declaran por default).
		Las variables locales ocultan los atributos de un objeto, por lo que hay que utilizar 
		la palabra this. */
	
}
