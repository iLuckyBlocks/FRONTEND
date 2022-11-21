package com.example.demo.servicesinterfaces;

import com.example.demo.entities.Contrato;

import java.util.List;
import java.util.Optional;

public interface IContratoService {

    public boolean insert(Contrato contra);
    List<Contrato>list();
    public void delete(int idContra);
    public Optional<Contrato>listarPorId(int idContra);

    List<Contrato>buscarContrato(String name);

    List<Contrato>buscarArrendador(String propiedad);


}
