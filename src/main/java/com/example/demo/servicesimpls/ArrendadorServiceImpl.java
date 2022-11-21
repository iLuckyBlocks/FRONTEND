package com.example.demo.servicesimpls;

import com.example.demo.entities.Arrendador;
import com.example.demo.entities.Estudiante;
import com.example.demo.repositories.IArrendadorRepository;
import com.example.demo.servicesinterfaces.IArrendadorService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;
@RestController
public class ArrendadorServiceImpl implements IArrendadorService {

    @Autowired
    private IArrendadorRepository aR;

    @Override
    @Transactional
    public boolean insert(Arrendador arr) {
        Arrendador objArr = aR.save(arr);
        if(objArr==null){
            return false;
        }else {
            return true;
        }
    }

    @Override
    @Transactional
    public void delete(int idArr) {
        aR.deleteById(idArr);
    }

    @Override
    public List<Arrendador> list() {
        return aR.findAll();
    }


    @Override
    public Optional<Arrendador>listarPorId(int idArr){return aR.findById(idArr);}

    @Override
    public List<Arrendador>buscarNombreUsuario(String nameArrendador){return aR.buscarNombreUsuario(nameArrendador);}

    @Override
    public List<Arrendador>buscarPorIdentificacion(String identificacion){return aR.buscarPorIdentificacion(identificacion);}

    @Override
    public List<Arrendador>buscardominioContrato(){return aR.buscardominioContrato();}

    @Override
    public List<Arrendador>buscardominioCelular(){return aR.buscardominioCelular();}

    @Override
    public List<Arrendador>buscardominioExtranjero(){return aR.buscardominioExtranjero();}

    @Override
    public List<Arrendador>buscardominioTarjeta(){
        return aR.buscardominioTarjeta();
    }

}
