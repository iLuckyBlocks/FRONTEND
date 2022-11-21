package com.example.demo.controller;

import com.example.demo.entities.MetodoPago;
import com.example.demo.servicesinterfaces.IMetodoPagoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/MetodoPago")
public class MetodoPagoController {

    @Autowired
    private IMetodoPagoService mService;

    @PostMapping
    public void registrar(@RequestBody MetodoPago m) {
        mService.insert(m);
    }
    @GetMapping
    public List<MetodoPago>listar(){
        return mService.list();
    }
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id") Integer id){
        mService.delete(id);
    }
    @PutMapping
    public void Modificar(@RequestBody MetodoPago metodopago){
        mService.insert(metodopago);
    }

    @PostMapping("/buscar")
    public List<MetodoPago>buscar(@RequestBody String nombre)throws ParseException {
        List<MetodoPago> listaMetodo;
        listaMetodo = mService.buscarNombre(nombre);
        return listaMetodo;
    }

    @GetMapping("/{id}")
    public Optional<MetodoPago> listarPorId(@PathVariable("id")Integer id){return mService.listarPorId(id);}

    /*
    @PostMapping("/buscar")
    public List<MetodoPago>buscar(@RequestBody MetodoPago metodopago){
        List<MetodoPago>lista;
        metodopago.setFormaPago(metodopago.getFormaPago());
        lista =mService.search(metodopago.getFormaPago());
        return lista;
    }
    */


}