package com.example.demo.entities;

import javax.persistence.*;

@Entity
@Table(name="MetodoPago")
public class MetodoPago {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idMetodoPago;

    @Column(name = "formaPago", length = 50, nullable = false)
    private String formaPago;

    public MetodoPago(){

    }

    public MetodoPago(int idMetodoPago, String formaPago){
        this.idMetodoPago = idMetodoPago;
        this.formaPago = formaPago;
    }


    public String getFormaPago() {
        return formaPago;
    }
    public void setFormaPago(String formaPg) {
        formaPago = formaPg;
    }

    public int getIdMetodoPago() {
        return idMetodoPago;
    }

    public void setIdMetodoPago(int idMetodoPago) {
        this.idMetodoPago = idMetodoPago;
    }
}
