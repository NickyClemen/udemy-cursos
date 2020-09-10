package com.zireael.springboot.backend.apirest.models.entity;

import javax.persistence.*;
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
    private String nombre;
    private String apellido;
    private String email;

    @Column(name="create_at")
    @Temporal(TemporalType.DATE) // Formato de hora.
    private Date createAt;

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
}
