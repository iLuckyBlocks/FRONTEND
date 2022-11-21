package com.example.demo.controller;

import com.example.demo.entities.Anuncio;
import com.example.demo.servicesinterfaces.IAnuncioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/anuncios")
public class AnuncioController {

    @Autowired
    private IAnuncioService aService;
    @PostMapping
    public void registrar(@RequestBody Anuncio anuncio){aService.insert(anuncio); }
    @GetMapping
    public List<Anuncio>listar(){
        return aService.list();
    }
    @PutMapping
    public void modificar(@RequestBody Anuncio anuncio){
        aService.insert(anuncio);
    }
    @DeleteMapping(value="/{id}")
    public void eliminar(@PathVariable("id") Integer id){
        aService.delete(id);
    }
    @PostMapping("/buscar")
    public List<Anuncio>buscar(@RequestBody Anuncio anuncio)throws ParseException {
        List<Anuncio> listaAnuncios;
        listaAnuncios = aService.buscarTitulo(anuncio.getTitulo());

        if (listaAnuncios.isEmpty()){
            /*listaAnuncios=aService.buscarArrendador(anuncio.getArrendador().getNombre());
   */
        }

        return listaAnuncios;

    }
    @GetMapping(value="/{id}")
    public Optional<Anuncio>listarPorId(@PathVariable("id")Integer id){return aService.listarPorId(id);}

    @GetMapping("/buscardominioDescripcion")
    public List<Anuncio>buscardominioDescripcion(){return aService.buscardominioDescripcion();}

    @GetMapping("/buscardominioTitulo")
    public List<Anuncio>buscardominioTitulo(){return aService.buscardominioTitulo();}

    @GetMapping("/buscardominioPrecio")
    public List<Anuncio>buscardominioPrecio(){return aService.buscardominioPrecio();}

}
