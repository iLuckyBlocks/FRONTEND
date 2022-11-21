package com.example.demo.entities;

import javax.persistence.*;

@Entity
@Table(name = "Comentario")
public class Comentario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idComentario;

    @Column(name = "Comentario", length = 50, nullable = false)
    private String comentario;
    @ManyToOne
    @JoinColumn(name = "idAnuncio", nullable = false)
    private Arrendador arrendador;

    public Comentario() {super();}

    //sino funciona es porque deben tener el mismo nombre
    public Comentario(int idComentario, String coment, Arrendador arrendador) {
        this.idComentario = idComentario;
        this.comentario = coment;
        this.arrendador=arrendador;
    }

    //ID COMENTARIO
    public int getIdComentario() {
        return idComentario;
    }
    public void setIdComentario(int idComentario) {
        this.idComentario = idComentario;
    }

    //COMENTARIO
    public String getComentario() {return comentario;}
    public void setComentario(String comentario) {this.comentario = comentario;}

    public Arrendador getArrendador() {
        return arrendador;
    }

    public void setArrendador(Arrendador arrendador) {
        this.arrendador = arrendador;
    }
}
