package Apuntes;

public class CaracterEspecial {

	public static void main(String[] args) {

		String name = "Nicole";
		String lastName = "Ordoqui";
		/* El espacio se considera un caracter especial. */
		
		System.out.println(name + " " + lastName);
		System.out.println("Nueva línea: \n" + name);
		System.out.println("Tab: \t" + name);
		System.out.println("Retroceder: \b" + name);
		System.out.println("Retorno: \r" + name);
		System.out.println("Comilla simple: \'" + name + "\'");
		System.out.println("Comilla simple: \"" + name + "\"");
		
		/* Se recomienda usar System.lineSeparator(); paa saber qué caracter especial usar. */

	}

}
