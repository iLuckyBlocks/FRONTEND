package com.example.demo.entities;

import javax.persistence.*;

@Entity
@Table(name = "Identificacion")
public class Identificacion {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idIdentificacion;

@Column(name = "tipoidentificacion", length = 50, nullable = false)
    private String tipoidentificacion;

    public Identificacion() {}

    public Identificacion(int idIdentificacion, String tipodeidentificacion) {
        this.idIdentificacion = idIdentificacion;
        this.tipoidentificacion = tipodeidentificacion;
    }

    public int getIdIdentificacion() {
        return idIdentificacion;
    }
    public void setIdIdentificacion(int idIdentificacion) {
        this.idIdentificacion = idIdentificacion;
    }

    public String getTipoidentificacion() {
        return tipoidentificacion;
    }
    public void setTipoidentificacion(String tipoidentificacion) {
        this.tipoidentificacion = tipoidentificacion;
    }
}
