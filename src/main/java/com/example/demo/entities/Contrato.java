package com.example.demo.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Contrato")
public class Contrato implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idContrato;

    @Column(name = "DetallesContrato", length = 50, nullable = false)
    private String detallesContrato;

    @Column(name = "Monto", length = 50, nullable = false)
    private int monto;

    @ManyToOne
    @JoinColumn(name="idArrendador", nullable = false)
    private Arrendador arrendador;


    public Contrato() {
        super();
        // TODO Auto-generated constructor stub
    }

    public Contrato(int idContrato, String detallesContrato, int monto, Arrendador arrendador) {
        this.idContrato = idContrato;
        this.detallesContrato = detallesContrato;
        this.monto = monto;
        this.arrendador=arrendador;
    }

    //ID CONTRATO
    public int getIdContrato() {
        return idContrato;
    }
    public void setIdContrato(int idContrato) {
        this.idContrato = idContrato;
    }

    //DETALLES CONTRATO
    public String getDetallesContrato() {
        return detallesContrato;
    }
    public void setDetallesContrato(String detallesContrato) {
        this.detallesContrato = detallesContrato;
    }

    public int getMonto() {
        return monto;
    }

    public void setMonto(int monto) {
        this.monto = monto;
    }


    public Arrendador getArrendador() {return arrendador;}

    public void setArrendador(Arrendador arrendador) {this.arrendador = arrendador;}
}
