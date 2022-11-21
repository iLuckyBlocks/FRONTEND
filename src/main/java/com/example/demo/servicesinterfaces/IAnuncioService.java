package com.example.demo.servicesinterfaces;

import com.example.demo.entities.Anuncio;

import java.util.List;
import java.util.Optional;

public interface IAnuncioService {

    public boolean insert(Anuncio anuncio);

    List<Anuncio>list();

    public void delete(int idAnuncio);
    public Optional<Anuncio> listarPorId(int idAnuncio);
    List<Anuncio>buscarTitulo(String TituloAnuncio);
    List<Anuncio>buscarDistrito(String distrito);

    List<Anuncio>buscardominioDescripcion();

    List<Anuncio>buscardominioTitulo();

    List<Anuncio>buscardominioPrecio();
}
