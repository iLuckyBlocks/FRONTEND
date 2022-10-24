package com.example.demo.repositories;

import com.example.demo.entities.TipodeIdentificacion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ITipodeIdentificacionRepository extends JpaRepository<TipodeIdentificacion,Integer> {
    @Query( "from TipodeIdentificacion ti where ti.tipoIdentificacion like %:tipoIdentificacion" )
    List<TipodeIdentificacion> search(@Param("tipoIdentificacion")String tipoIdentificacion);
}
