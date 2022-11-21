package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.demo.entities.TipoUsuario;
import com.example.demo.servicesinterfaces.ITipoUsuarioService;


import java.text.ParseException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/tipoUsuario")
public class TipoUsuarioController {

    @Autowired
    private ITipoUsuarioService tService;
    @PostMapping
    public void registrar(@RequestBody TipoUsuario t){tService.insert(t); }
    @GetMapping
    public List<TipoUsuario>listar(){
        return tService.list();
    }
    @PutMapping
    public void modificar(@RequestBody TipoUsuario typeUser){
        tService.insert(typeUser);
    }
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id") Integer id){
        tService.delete(id);
    }


    //MODIFICADO

    @PostMapping("/buscar")
    public List<TipoUsuario>buscar(@RequestBody String nombre)throws ParseException {
        List<TipoUsuario> listaTipoUsuario;
        listaTipoUsuario = tService.buscarNombre(nombre);
        return listaTipoUsuario;
    }

    @GetMapping("/{id}")
    public Optional<TipoUsuario>listarPorId(@PathVariable("id")Integer id){return tService.listarPorId(id);}

   /* @PostMapping("/buscar")
    public  List<TipoUsuario> buscar(@RequestBody TipoUsuario typeUser){
        List<TipoUsuario> lista;
        typeUser.setTipoUsuario(typeUser.getTipoUsuario());
        lista= tService.search(typeUser.getTipoUsuario());
        return lista;
    }
    */
}
