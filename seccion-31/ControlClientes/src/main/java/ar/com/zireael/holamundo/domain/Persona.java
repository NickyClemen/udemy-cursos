package ar.com.zireael.holamundo.domain;

import lombok.Data;
import lombok.Generated;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import java.io.Serializable;

@Data // Autocompleta los métodos de las clases.
@Entity // Convierte en clase de entidad.
@Table(name = "persona") // Evita inconsistencias entre el programa y la base de datos.
public class Persona implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Estrategia para generar primary key.
    private Long idPersona;

    @NotEmpty // Validaciones. Existe tambipen @NotNull.
    // @NotEmpty se recomienda para string (valida que no esté vacía ni sea null). */
    private String nombre;

    @NotEmpty
    private String apellido;

    @NotEmpty
    @Email // Valida el email.
    private String email;

    @NotEmpty
    private String telefono;
}
