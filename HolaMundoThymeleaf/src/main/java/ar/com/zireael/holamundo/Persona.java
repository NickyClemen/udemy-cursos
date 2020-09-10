package ar.com.zireael.holamundo;

import lombok.Data;

@Data // Autocompleta los métodos de las clases.
public class Persona {
    private String nombre;
    private String apellido;
    private String email;
    private String telefono;
}
