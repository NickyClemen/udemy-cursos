package apuntes;

public class AlcanceVariables {
	
	/* Palabra this.
	Se utiliza apara hacer referencia la objeto con el que se está trabajando.
	this es un operador que nos permite referenciar al objeto que se está trabajando. Sirve
	para acceder a los atributos y métodos de una clase. Con ésto, se puede hacer una diferencia
	entre los argumentos recibidos en un método, y los atributos de una clase. 
	
		public Aritmetica(int a, int b) {
		
			this.a = a;
			this.b = b;
			El argumento y el atributo se llaman igual, por lo que toma prioridad el argumento
			por sobre el atributo de la clase. Se lo llama "ocultamiento del atributo de la clse".
			Para solucionarlo, se coloca el this antes del atributo.
		
		}
		
	Alcance de una variable.
	
		1) Variables de clase: Pertenecen a la clase.
			a) Pueden usarse en cualquier método de la clase.
			b) Se inicializan con valores por default.
		2) Variables locales: 
			a) Se pueden usar sólo en el método en el que se definen.
			b) Se deben inicializar (no se declaran por default).
		Las variables locales ocultan los atributos de un objeto, por lo que hay que utilizar 
		la palabra this. */
	
}
