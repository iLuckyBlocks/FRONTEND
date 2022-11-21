package com.example.demo.servicesinterfaces;

import com.example.demo.entities.Comentario;
import com.example.demo.entities.Estudiante;

import java.util.List;
import java.util.Optional;

public interface IComentarioService {


    public boolean insert(Comentario comentario);
    List<Comentario>list();

    public void delete(int idComment);
    public Optional<Comentario> listarPorId(int idComment);

    List<Comentario>buscarPorArrendador(String arrendador);
    List<Comentario>buscarComentario(String comentario);

    List<Comentario>buscardominioComentario();
}
