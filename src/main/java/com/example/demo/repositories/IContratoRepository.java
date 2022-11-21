package com.example.demo.repositories;

import com.example.demo.entities.Contrato;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IContratoRepository extends JpaRepository<Contrato,Integer>  {

    @Query("from Contrato con Where con.detallesContrato like %:detallesContrato%")
    List<Contrato> buscarContrato(@Param("detallesContrato") String detallesContrato);

    @Query("from Contrato con Where con.arrendador.nombre like %:nombre%")
    List<Contrato>buscarArrendador(@Param("nombre") String nombre);

}
