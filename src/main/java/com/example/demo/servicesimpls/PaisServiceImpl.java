package com.example.demo.servicesimpls;

import com.example.demo.entities.Pais;
import com.example.demo.repositories.IPaisRepository;
import com.example.demo.servicesinterfaces.IPaisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PaisServiceImpl implements IPaisService {

    @Autowired
    private IPaisRepository tR;
    @Override
    public void insert(Pais pais) { tR.save(pais); }
    @Override
    public List<Pais> list() { return tR.findAll(); }
    @Override
    public void delete(int idPais) {tR.deleteById(idPais); }
    @Override
    public Optional<Pais> listarPorId(int idPais){return tR.findById(idPais);}
    @Override
    public List<Pais> buscarNombre(String pais) { return tR.buscarNombre(pais); }
}
