package com.example.demo.controller;

import com.example.demo.entities.Arrendador;
import com.example.demo.entities.Estudiante;
import com.example.demo.servicesinterfaces.IArrendadorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/Arrendador")
public class ArrendadorController {

    @Autowired
    private IArrendadorService aService;

    @PostMapping
    public void registrar(@RequestBody Arrendador arr){aService.insert(arr); }

    @PutMapping
    public void modificar(@RequestBody Arrendador arr){
        aService.insert(arr);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id") Integer id){
        aService.delete(id);
    }

    @GetMapping
    public List<Arrendador> listar(){
        return aService.list();
    }

    @PostMapping("/buscar")
    public List<Arrendador>buscar(@RequestBody Arrendador arr)throws ParseException {
        List<Arrendador> listaArrendador;
        listaArrendador = aService.buscarNombreUsuario(arr.getNombre());

        if (listaArrendador.isEmpty()){
                listaArrendador=aService.buscarPorIdentificacion(arr.getIdentificacion().getTipoidentificacion());
        }
        return listaArrendador;
    }
    @GetMapping("/{id}")
    public Optional<Arrendador>listarPorId(@PathVariable("id")Integer id){return aService.listarPorId(id);}

    @GetMapping("/buscardominioContrato")
    public List<Arrendador>buscarPorContrato(){return aService.buscardominioContrato();}

    @GetMapping("/buscardominioCelulares")
    public List<Arrendador>buscarPorCelular(){return aService.buscardominioCelular();}

    @GetMapping("/buscardominioExtranjero")
    public List<Arrendador>buscarPorPais(){return aService.buscardominioExtranjero();}

    @GetMapping("/buscardominioTarjeta")
    public List<Arrendador>buscarPorTarjeta(){return aService.buscardominioTarjeta();}
}
