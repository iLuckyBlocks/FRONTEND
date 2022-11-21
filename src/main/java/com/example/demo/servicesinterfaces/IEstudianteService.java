package com.example.demo.servicesinterfaces;

import com.example.demo.entities.Estudiante;

import java.util.List;
import java.util.Optional;

public interface IEstudianteService {

    public void insert(Estudiante user);
    List<Estudiante>list();
    public void delete(int idUsuario);
    public Optional<Estudiante>listarPorId(int idUsuario);

    List<Estudiante>buscarName(String nameUsuario);


    List<Estudiante>buscarCelular(String email);
    List<Estudiante>buscarDominio();

    /*
    List<Estudiante>buscarNombre(String nombre);

    List<Estudiante>buscarDominioNombres();

     */

    List<Estudiante>buscardominioPais();
    List<Estudiante>buscardominioPagos();

}
