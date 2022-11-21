package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.demo.entities.Estudiante;
import com.example.demo.servicesinterfaces.IEstudianteService;

import java.text.ParseException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/Estudiante")
public class EstudianteController {

    @Autowired
    private IEstudianteService uService;

    @PostMapping
    public void registrar(@RequestBody Estudiante user){uService.insert(user); }


    @GetMapping
    public List<Estudiante>listar(){
        return uService.list();
    }


    @PutMapping
    public void modificar(@RequestBody Estudiante User){
        uService.insert(User);
    }
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id") Integer id){
        uService.delete(id);
    }

    @PostMapping("/buscar")
    public List<Estudiante>buscar(@RequestBody String nombre)throws ParseException {
        List<Estudiante> listaEstudiante;
        listaEstudiante = uService.buscarName(nombre);
        return listaEstudiante;
    }

    @GetMapping("/{id}")
    public Optional<Estudiante>listarPorId(@PathVariable("id")Integer id){return uService.listarPorId(id);}



    @PostMapping("/buscarcelular")
    public List<Estudiante>buscarCelular(@RequestBody String celular){return  uService.buscarCelular(celular);}

    @GetMapping("/buscardominio")
    public List<Estudiante>buscarCorreo(){return uService.buscarDominio();}

/*
    @PostMapping("/buscarnombre")
    public List<Estudiante>buscarNombre(@RequestBody String nombre) {return uService.buscarNombre(nombre);}

    @GetMapping("/buscardominioNombres")
    public List<Estudiante>buscarNombres(@RequestBody String nombres){return uService.buscarDominioNombres();}
 */
    @GetMapping("/buscardominioPais")
    public List<Estudiante>buscarPorPais(){return uService.buscardominioPais();}

    @GetMapping("/buscardominioPagos")
    public List<Estudiante>buscarPorPagos(){return uService.buscardominioPagos();}

}
