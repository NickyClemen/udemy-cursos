package palabrafinal;

public final class ClaseFinal {

    public final int varNumero = 10; /* Se puede inicializar la variable en ésta línea, o dentro de un
    constructor. */

    // Constante.
    public static final int VAR_PRIMITIVO = 15;

    public static final Persona VAR_PERSONA = new Persona(); /* La variable ya no puede apuntar a otro objeto.
    Es constante la refencia del objeto (la constante puede acceder a los atributos del objeto, tanto cpara
    leerlos, como para modficarlos). Puede modificar el estado, pero no la referencia. */

    // Método final.
    public final void metodoFinal() {} // No se puede redefinir (sobreescribir) el comportamiento del método en otras instancias de la clase.


} // No se puede instanciar la clase.


