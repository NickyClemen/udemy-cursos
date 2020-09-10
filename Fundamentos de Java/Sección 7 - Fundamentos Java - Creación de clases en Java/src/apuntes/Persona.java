package apuntes;

public class Persona {
// Tiene que ser de tipo public para poder ser accedida por otras clases.
	
	// Atributos.
	String nombre;
	String apellido; /* Son variables sin inicializar. Se las conoce como 'atributos de la clase',
	ya que son las carcaterísticas de la clase. */
	
	// Métodos.
	public void desplegarNombre() {
		
		System.out.println("Me llamo " + nombre + apellido + ".");
		
	} // void es para indicar que no retorna ningún tipo de información.
	
} /* El nombre de la clase tiene que coincidir con el nombre del archivo. */
