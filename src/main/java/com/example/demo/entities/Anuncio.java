package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.io.Serializable;


@Entity
@Table(name = "Anuncio")
public class Anuncio implements Serializable {

    private static final long serialVersionUID=1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idAnuncio;

    @Column(name = "imagen", length = 50, nullable = false)
    private String imagen;

    @Column(name = "titulo", length = 50, nullable = true)
    private String titulo;

    @Column(name = "Precio", length = 50, nullable = false)
    private int precio;

    @Column(name="Descripcion", length = 100, nullable = true)
    private String descripcion;

    @Column(name = "Distrito", length = 50, nullable = false)
    private String distrito;

    @Column(name = "Direccion", length = 100, nullable = false)
    private String direccion;

    public Anuncio() {
        super();
    }

    public Anuncio(int idAnuncio, String imagen, String titulo, int costo,String descripcion, String adress, String distrito , Arrendador arren) {
        this.idAnuncio = idAnuncio;
        this.imagen = imagen;
        this.titulo = titulo;
        this.precio = costo;
        this.descripcion=descripcion;
        this.direccion=adress;
        this.distrito=distrito;
    }

    public int getIdAnuncio() {
        return idAnuncio;
    }
    public void setIdAnuncio(int idAnuncio) {
        this.idAnuncio = idAnuncio;
    }

    public String getImagen() {
        return imagen;
    }
    public void setImagen(String imagen) {
        this.imagen = imagen;
    }

    public String getTitulo() {
        return titulo;
    }
    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public int getPrecio() {return precio;}
    public void setPrecio(int precio) {this.precio = precio;}

    public String getDescripcion() {return descripcion;}
    public void setDescripcion(String descripcion) {this.descripcion = descripcion;}

    public String getDireccion() {return direccion;}
    public void setDireccion(String direccion) {this.direccion = direccion;}

    public String getDistrito() {return distrito;}
    public void setDistrito(String distrito) {this.distrito = distrito;}

}
