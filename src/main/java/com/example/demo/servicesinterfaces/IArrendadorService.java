package com.example.demo.servicesinterfaces;

import com.example.demo.entities.Arrendador;

import java.util.List;
import java.util.Optional;

public interface IArrendadorService {

    public boolean insert(Arrendador arr);

    public void delete(int idArr);

    public Optional<Arrendador>listarPorId(int idArr);

    List<Arrendador>list();

    List<Arrendador>buscarNombreUsuario(String nameUser);
    List<Arrendador>buscarPorIdentificacion(String identificacion);

    List<Arrendador>buscardominioContrato();
    List<Arrendador>buscardominioCelular();
    List<Arrendador>buscardominioExtranjero();
    List<Arrendador>buscardominioTarjeta();
}
