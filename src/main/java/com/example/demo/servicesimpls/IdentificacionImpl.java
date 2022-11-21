package com.example.demo.servicesimpls;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entities.Identificacion;
import com.example.demo.repositories.IIdentificacionRepository;
import com.example.demo.servicesinterfaces.IIdentificacionService;

import java.util.List;
import java.util.Optional;

@Service
public class IdentificacionImpl implements IIdentificacionService {
    @Autowired
    private IIdentificacionRepository tiR;

    @Override
    public void insert(Identificacion tipodeide) {tiR.save(tipodeide);}

    @Override
    public List<Identificacion> list() {
        return tiR.findAll();
    }

    @Override
    public void delete(int ididentificacion) {tiR.deleteById(ididentificacion);}

    @Override
    public Optional<Identificacion> listarPorId(int idTipoIdentificacion){return tiR.findById(idTipoIdentificacion);}

    @Override
    public List<Identificacion> buscarNombre(String tipoide) {
        return tiR.buscarNombre(tipoide);
    }

}
