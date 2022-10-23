package com.example.demo.entities;

import javax.persistence.*;

@Entity
@Table(name = "TipodeIdentificacion")
public class TipodeIdentificacion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idNumeroIdentificacion;

    @Column(name = "TipoIdentificacion", length = 50, nullable = false)
    private String TipoIdentificacion;

    public TipodeIdentificacion() {
    }

    public TipodeIdentificacion(int idNumeroIdentificacion, String tipoIdentificacion) {
        this.idNumeroIdentificacion = idNumeroIdentificacion;
        this.TipoIdentificacion = tipoIdentificacion;
    }

    public int getIdNumeroIdentificacion() {
        return idNumeroIdentificacion;
    }

    public void setIdNumeroIdentificacion(int idNumeroIdentificacion) {
        this.idNumeroIdentificacion = idNumeroIdentificacion;
    }

    public String getTipoIdentificacion() {
        return TipoIdentificacion;
    }

    public void setTipoIdentificacion(String tipoIdentificacion) {
        this.TipoIdentificacion = tipoIdentificacion;
    }
}
