package com.example.demo.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Arrendador")
public class Arrendador implements Serializable{

    private static final long serialVersionUID=1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idArrendador;

    @Column(name = "nombre", length = 50, nullable = false)
    private String nombre;

    @Column(name = "celular", length = 50, nullable = false)
    private String celular;

    @Column(name = "correo_electronico", length = 50, nullable = false)
    private String correo_electronico;

    @Column(name = "password", length = 50,nullable = false)
    private String password;

    @Column(name = "direccion", length = 50, nullable = false)
    private String direccion;

    @Column(name="propiedad", length = 80,nullable = false)
    private String propiedad;

    @ManyToOne
    @JoinColumn(name = "idPais", nullable = false)
    private Pais pais;

    @ManyToOne
    @JoinColumn(name = "idIdentificacion", nullable = false)
    private Identificacion identificacion;

    @ManyToOne
    @JoinColumn(name = "idMetodoPago" , nullable = false)
    private MetodoPago metodoPago;

    @ManyToOne
    @JoinColumn(name = "idTipoUser", nullable = false)
    private TipoUsuario tipo;

    public Arrendador(){
        super();
        // TODO Auto-generated constructor stub
    }

    public Arrendador(int idArrendador, String nombre, String celular, String correo_electronico, String password,
                      String direccion, String propiedad, Pais pais, Identificacion tipodeidentificacion, MetodoPago metodoPago, TipoUsuario tipo) {
        this.idArrendador = idArrendador;
        this.nombre = nombre;
        this.celular = celular;
        this.correo_electronico = correo_electronico;
        this.password = password;
        this.direccion = direccion;
        this.propiedad = propiedad;
        this.pais= pais;
        this.identificacion= tipodeidentificacion;
        this.metodoPago=metodoPago;
        this.tipo= tipo;
    }

    //ID
    public int getIdArrendador() {return idArrendador;}
    public void setIdArrendador(int idArrendador) {this.idArrendador = idArrendador;}

    //OBTENER NOMBRE
    public String getNombre() {return nombre;}
    public void setNombre(String nombre) {this.nombre = nombre;}

    //CELULAR
    public String getCelular() {return celular;}
    public void setCelular(String celular) {this.celular = celular;}

    //CORREO
    public String getCorreo_electronico() {return correo_electronico;}
    public void setCorreo_electronico(String correo_electronico) {this.correo_electronico = correo_electronico;}

    //CONTRASEÑA
    public String getPassword() {return password;}
    public void setPassword(String password) {this.password = password;}

    //DIRECCION
    public String getDireccion() {return direccion;}
    public void setDireccion(String direccion) {this.direccion = direccion;}

    //PROPIEDAD
    public String getPropiedad() {return propiedad;}
    public void setPropiedad(String propiedad) {
        this.propiedad = propiedad;
    }


    public Identificacion getIdentificacion() {return identificacion;}

    public void setIdentificacion(Identificacion identificacion) {this.identificacion = identificacion;}

    public Pais getPais() {return pais;}
    public void setPais(Pais pais) {this.pais = pais;}


    public MetodoPago getMetodoPago() {return metodoPago;}
    public void setMetodoPago(MetodoPago metodoPago) {this.metodoPago = metodoPago;}


    public TipoUsuario getTipo() {
        return tipo;
    }

    public void setTipo(TipoUsuario tipo) {
        this.tipo = tipo;
    }
}
