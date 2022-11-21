package com.example.demo.servicesimpls;

import com.example.demo.entities.Anuncio;
import com.example.demo.repositories.IAnuncioRepository;
import com.example.demo.servicesinterfaces.IAnuncioService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
public class AnuncioServiceImpl implements IAnuncioService {
    @Autowired
    private IAnuncioRepository aR;

    @Override
    @Transactional
    public boolean insert(Anuncio anun) {
        Anuncio objArr = aR.save(anun);
        if(objArr==null){
            return false;
        }else {
            return true;
        }
    }

    @Override
    public List<Anuncio> list() {
        return aR.findAll();
    }

    @Override
    @Transactional
    public void delete(int idArr) {
        aR.deleteById(idArr);
    }

    @Override
    public Optional<Anuncio>listarPorId(int idArr){return aR.findById(idArr);}

    @Override
    public List<Anuncio>buscarTitulo(String Anun){return aR.buscarTitulo(Anun);}

    @Override
    public List<Anuncio>buscarDistrito(String distrito){return aR.buscarDistrito(distrito);}

    @Override
    public List<Anuncio>buscardominioDescripcion(){return aR.buscardominioDescripcion();}

    @Override
    public List<Anuncio>buscardominioTitulo(){return aR.buscardominioTitulo();}

    @Override
    public List<Anuncio>buscardominioPrecio(){return aR.buscardominioPrecio();}
}
