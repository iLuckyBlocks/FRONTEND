package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.demo.entities.Identificacion;
import com.example.demo.servicesinterfaces.IIdentificacionService;

import java.text.ParseException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/tiposdeidentificacion")
public class TipodeIdentificacionController {

    @Autowired
    private IIdentificacionService tiService;

    @PostMapping
    public void registrar(@RequestBody Identificacion ti){
        tiService.insert(ti);
    }
    @GetMapping
    public List<Identificacion>listar(){return tiService.list();}
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id") Integer id){tiService.delete(id);}
    @PutMapping
    public void modificar(@RequestBody Identificacion tipodeidentificacion ){
        tiService.insert(tipodeidentificacion);
    }

    @PostMapping("/buscar")
    public List<Identificacion>buscar(@RequestBody String nombre)throws ParseException {
        List<Identificacion> listaTipoUsuario;
        listaTipoUsuario = tiService.buscarNombre(nombre);
        return listaTipoUsuario;}

    @GetMapping("/{id}")
    public Optional<Identificacion> listarPorId(@PathVariable("id")Integer id){return tiService.listarPorId(id);}

    /*
    @PostMapping("/buscar")
    public List<TipodeIdentificacion> buscar(@RequestBody TipodeIdentificacion tipodeIdentificacion){
        List<TipodeIdentificacion> lista;
        tipodeIdentificacion.setTipoIdentificacion(tipodeIdentificacion.getTipoIdentificacion());
        lista=tiService.search(tipodeIdentificacion.getTipoIdentificacion());
        return lista;
    }
*/

}
