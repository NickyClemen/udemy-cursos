package apuntes;

public class Persona {
// Tiene que ser de tipo public para poder ser accedida por otras clases.
	
	// Atributos.
	String nombre;
	String apellido; /* Son variables sin inicializar. Se las conoce como 'atributos de la clase',
	ya que son las carcater�sticas de la clase. */
	
	// M�todos.
	public void desplegarNombre() {
		
		System.out.println("Me llamo " + nombre + apellido + ".");
		
	} // void es para indicar que no retorna ning�n tipo de informaci�n.
	
} /* El nombre de la clase tiene que coincidir con el nombre del archivo. */
