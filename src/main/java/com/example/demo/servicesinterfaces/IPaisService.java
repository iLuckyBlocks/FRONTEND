package com.example.demo.servicesinterfaces;

import com.example.demo.entities.Pais;

import java.util.List;
import java.util.Optional;

public interface IPaisService {



    public void insert(Pais pais);
    List<Pais> list();
    public void delete(int idPais);

    public Optional<Pais>listarPorId(int IdPais);
    List<Pais>buscarNombre(String namepais);


}
