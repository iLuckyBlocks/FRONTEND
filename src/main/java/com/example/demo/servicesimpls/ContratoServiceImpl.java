package com.example.demo.servicesimpls;

import com.example.demo.entities.Contrato;
import com.example.demo.repositories.IContratoRepository;
import com.example.demo.servicesinterfaces.IContratoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
public class ContratoServiceImpl implements IContratoService {

    @Autowired
    private IContratoRepository cR;

    @Override
    @Transactional
    public boolean insert(Contrato con) {
        Contrato objContrato = cR.save(con);
        if(objContrato==null){
            return false;
        }else {
            return true;
        }
    }

    @Override
    public List<Contrato> list() {
        return cR.findAll();
    }

    @Override
    @Transactional
    public void delete(int idContrato) {
        cR.deleteById(idContrato);
    }

    @Override
    public Optional<Contrato>listarPorId(int idContrato){return cR.findById(idContrato);}

    @Override
    public List<Contrato>buscarContrato(String datoContrato){return cR.buscarContrato(datoContrato);}

    @Override
    public List<Contrato>buscarArrendador(String arrendador){return cR.buscarArrendador(arrendador);}

}
