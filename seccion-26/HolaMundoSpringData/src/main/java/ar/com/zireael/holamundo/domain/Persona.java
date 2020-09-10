package ar.com.zireael.holamundo.domain;

import lombok.Data;
import lombok.Generated;

import javax.persistence.*;
import java.io.Serializable;

@Data // Autocompleta los métodos de las clases.
@Entity // Convierte en clase de entidad.
@Table(name = "persona") // Evita inconsistencias entre el programa y la base de datos.
public class Persona implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Estrategia para generar primary key.
    private Long idPersona;
    private String nombre;
    private String apellido;
    private String email;
    private String telefono;
}
