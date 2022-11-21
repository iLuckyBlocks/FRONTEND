package com.example.demo.servicesimpls;

import com.example.demo.entities.Estudiante;
import com.example.demo.repositories.IEstudianteRepository;
import com.example.demo.servicesinterfaces.IEstudianteService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EstudianteServiceImpl implements IEstudianteService {

    @Autowired
    private IEstudianteRepository uR;

    @Override
    public void insert(Estudiante estudiante){uR.save(estudiante);}

    @Override
    public List<Estudiante> list() {
        return uR.findAll();
    }

    @Override
    public void delete(int idUsuario) {
        uR.deleteById(idUsuario);
    }

    @Override
    public Optional<Estudiante>listarPorId(int idUsuario){return uR.findById(idUsuario);}

    @Override
    public List<Estudiante>buscarName(String nameUsuario){return uR.buscarNombre(nameUsuario);}

    @Override
    public List<Estudiante>buscarCelular(String celular){
        return uR.findByCelular(celular);
    }

    @Override
    public List<Estudiante> buscarDominio() {
        return uR.buscardominio();
    }

    /*
    @Override
    public List<Estudiante>buscarNombre(String nombre){
        return uR.findByNombre(nombre);
    }
    @Override
    public List<Estudiante>buscarDominioNombres(){
        return uR.buscardominioNombres();
    }
     */

    @Override
    public List<Estudiante>buscardominioPais(){
        return uR.buscardominioPais();
    }

    @Override
    public List<Estudiante>buscardominioPagos(){
        return uR.buscardominioPagos();
    }


}