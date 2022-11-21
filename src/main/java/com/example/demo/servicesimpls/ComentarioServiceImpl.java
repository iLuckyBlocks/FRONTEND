package com.example.demo.servicesimpls;

import com.example.demo.entities.Comentario;
import com.example.demo.entities.Estudiante;
import com.example.demo.repositories.IComentarioRepository;
import com.example.demo.servicesinterfaces.IComentarioService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
public class ComentarioServiceImpl implements IComentarioService {
    @Autowired
    private IComentarioRepository cR;
    @Override
    @Transactional
    public boolean insert(Comentario comment) {
        Comentario objComment = cR.save(comment);
        if(objComment==null){
            return false;
        }else {
            return true;
        }
    }

    @Override
    public List<Comentario>list(){return cR.findAll();}
    public void delete (int idComentario){
        cR.deleteById(idComentario);
    }
    @Override
    public Optional<Comentario>listarPorId(int idComment){return cR.findById(idComment);}
    @Override
    public List<Comentario>buscarPorArrendador(String arrendador){return cR.buscarPorArrendador(arrendador);}
    @Override
    public List<Comentario>buscarComentario(String comentario){return cR.buscarComentario(comentario);}

    @Override
    public List<Comentario>buscardominioComentario(){return cR.buscardominioComentario();}

}
