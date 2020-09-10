package com.zireael.springboot.backend.apirest.models.entity;

import javax.persistence.*;

import java.io.Serializable;

@Entity
@Table(name = "regiones")
public class Region implements Serializable {
    private final static Long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;

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
}
