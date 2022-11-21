package com.example.demo.controller;

import com.example.demo.entities.Contrato;
import com.example.demo.servicesinterfaces.IContratoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.text.ParseException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/Contrato")
public class ContratoController {

    @Autowired
    private IContratoService conService;

    @PostMapping
    public void registrar(@RequestBody Contrato con){conService.insert(con); }
    @GetMapping
    public List<Contrato>listar(){return conService.list();}
    @PutMapping
    public void modificar(@RequestBody Contrato con){
        conService.insert(con);
    }
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id") Integer id){
        conService.delete(id);
    }

    @PostMapping("/buscar")
    public List<Contrato>buscar(@RequestBody Contrato con)throws ParseException {
        List<Contrato> listaContrato;
        listaContrato = conService.buscarContrato(con.getDetallesContrato());

        if (listaContrato.isEmpty()){

            listaContrato= conService.buscarArrendador(con.getArrendador().getNombre());
        }
        return listaContrato;
    }
    @GetMapping("/{id}")
    public Optional<Contrato>listarPorId(@PathVariable("id")Integer id){return conService.listarPorId(id);}

}
