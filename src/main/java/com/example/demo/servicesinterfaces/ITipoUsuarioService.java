package com.example.demo.servicesinterfaces;

import com.example.demo.entities.TipoUsuario;

import java.util.List;
import java.util.Optional;

public interface ITipoUsuarioService {
    public void insert(TipoUsuario typeUser);
    List<TipoUsuario>list();
    public void delete(int idTipoUsuario);

    //MODIFICADO

    public Optional<TipoUsuario>listarPorId(int idTipoUsuario);

    List<TipoUsuario>buscarNombre(String nameTipoUsuario);

    /*    List<TipoUsuario>search(String TipoUser); */
}
