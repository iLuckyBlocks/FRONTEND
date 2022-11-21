package com.example.demo.servicesinterfaces;

import com.example.demo.entities.Identificacion;

import java.util.List;
import java.util.Optional;

public interface IIdentificacionService {


    public void insert(Identificacion tipodeidentificacion);
    List<Identificacion>list();
    public void delete(int idIdentificacion);

    public Optional<Identificacion> listarPorId(int idTipoIdentificacion);
    List<Identificacion>buscarNombre(String tipoidentificacion);
}
