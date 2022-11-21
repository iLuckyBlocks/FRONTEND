package com.example.demo.servicesinterfaces;

import com.example.demo.entities.MetodoPago;
import java.util.List;
import java.util.Optional;


public interface IMetodoPagoService {



    public void insert(MetodoPago metodopago);
    List<MetodoPago>list();

    public void delete(int IdMetodoPago);

    public Optional<MetodoPago> listarPorId(int idMetodoPago);
    List<MetodoPago> buscarNombre(String nameFormaPago);
}
