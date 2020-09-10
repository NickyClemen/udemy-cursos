package com.zireael.springboot.backend.apirest.models.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name="clientes")
public class Cliente implements Serializable { // Convierte la clase en una entity que mapea con database.
    private static final long serialVersionUID = 1L; // Atributo requerido por el Serializable.

    @Id // Indica que corresponde a la primary key.
    @GeneratedValue(strategy=GenerationType.IDENTITY) // Indicar como se genera la primary key. IDENTITY es para auto_increment.
    private Long id;

    // @Column() Cuando el nombre del atributo es igual al campo, se puede omitir el @Column.
    @NotEmpty(message = "no puede estar vacío") // No esté vacío.
    @Size(min=4, max=12, message="tiene que tener un largo de entre cuatro y doce caracteres") // Valida la cantidad de caracteres.
    @Column(nullable = false)
    private String nombre;

    @NotEmpty(message = "no puede estar vacío")
    private String apellido;

    @NotEmpty(message = "no puede estar vacío")
    @Email(message = "no es una dirección de correo válida")
    @Column(nullable = false, unique= false)
    private String email;

    @NotNull(message="no puede estar vacío")
    @Column(name="create_at")
    @Temporal(TemporalType.DATE) // Formato de hora.
    private Date createAt;

    /* Evento de las clases entity: Guardar en la fecha en la base antes de un save.
    @PrePersist
    public void prePersist() {
        createAt = new Date();
    } */

    private String foto;

    @NotNull(message = "no puede estar vacío")
    @ManyToOne(fetch = FetchType.LAZY) /* Ésta clase, crea un proxy, que a su vez, agrega atributos al JSON,
    por lo que hay que omitirlos. */
    @JoinColumn(name = "region_id")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Region region;

    public String getFoto() {
        return this.foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return this.apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Date getCreateAt() {
        return this.createAt;
    }

    public void setCreateAt(Date createAt) {
        this.createAt = createAt;
    }

    public Region getRegion() {
        return this.region;
    }

    public void setRegion(Region region) {
        this.region = region;
    }
}
