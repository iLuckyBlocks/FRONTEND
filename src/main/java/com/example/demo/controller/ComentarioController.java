package com.example.demo.controller;

import com.example.demo.entities.Comentario;
import com.example.demo.entities.Estudiante;
import com.example.demo.servicesinterfaces.IComentarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/comentarios")
public class ComentarioController {

    @Autowired
    private IComentarioService cService;

    @PostMapping
    public void registrar(@RequestBody Comentario comment){cService.insert(comment); }
    @GetMapping
    public List<Comentario>listar(){
        return cService.list();
    }
    @PutMapping
    public void modificar(@RequestBody Comentario comment){
        cService.insert(comment);
    }
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id") Integer id){
        cService.delete(id);
    }

    @PostMapping("/buscar")
    public List<Comentario>buscar(@RequestBody Comentario comment)throws ParseException {
        List<Comentario> listaComment;
        listaComment = cService.buscarComentario(comment.getComentario());

        if (listaComment.isEmpty()){
           listaComment=cService.buscarPorArrendador(comment.getArrendador().getNombre());
        }
        return listaComment;
    }

    @GetMapping("/{id}")
    public Optional<Comentario>listarPorId(@PathVariable("id")Integer id){return cService.listarPorId(id);}


    @GetMapping("/buscardominioComentario")
    public List<Comentario>buscarPorComentario(){return cService.buscardominioComentario();}


}
