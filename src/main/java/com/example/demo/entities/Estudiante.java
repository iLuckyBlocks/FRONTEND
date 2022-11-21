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
@Table(name = "Estudiante")
public class Estudiante implements Serializable {

    private static final long serialVersionUID=1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idEstudiante;

    @Column(name = "nombre", length = 50, nullable = false)
    private String nombre;

    @Column(name = "celular", nullable = false)
    private String celular;

    @Column(name = "correo_electronico", length = 50, nullable = false)
    private String correo_electronico;

    @Column(name = "password", nullable = false)
    private String password;

    //added here

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


    public Estudiante(int idUsuario, String nombre, String celular, String correo_electronico,
                      String password, Pais pais,Identificacion identificacion, MetodoPago metodoPago, TipoUsuario tipo) {
        this.idEstudiante = idUsuario;
        this.nombre = nombre;
        this.celular = celular;
        this.correo_electronico = correo_electronico;
        this.password = password;
        this.pais= pais;
        this.identificacion= identificacion;
        this.metodoPago=metodoPago;
        this.tipo= tipo;

    }

    public Estudiante() {
        super();
        // TODO Auto-generated constructor stub
        }

    //ID Estudiante
    public int getIdUsuario() {
        return idEstudiante;
    }
    public void setIdUsuario(int idUsuario) {
        this.idEstudiante = idUsuario;
    }

    //NOMBRES
    public String getNombre() {return nombre;}
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    //CELULAR
    public String  getCelular() {
        return celular;
    }
    public void setCelular(String celular) {
        this.celular = celular;
    }

    //CORREO
    public String getCorreo_electronico() {
        return correo_electronico;
    }
    public void setCorreo_electronico(String correo_electronico) {
        this.correo_electronico = correo_electronico;
    }

    //CONTRASEÑAS
    public String getPassword() {return password;}
    public void setPassword(String password) {this.password = password;}

    public int getIdEstudiante() {return idEstudiante;}
    public void setIdEstudiante(int idEstudiante) {this.idEstudiante = idEstudiante;}


    public Pais getPais() {return pais;}
    public void setPais(Pais pais) {this.pais = pais;}


    public Identificacion getIdentificacion() {return identificacion;}
    public void setIdentificacion(Identificacion identificacion) {this.identificacion = identificacion;}


    public MetodoPago getMetodoPago() {return metodoPago;}
    public void setMetodoPago(MetodoPago metodoPago) {this.metodoPago = metodoPago;}


    public TipoUsuario getTipo() {return tipo;}
    public void setTipo(TipoUsuario tipo) {this.tipo = tipo;}
}
