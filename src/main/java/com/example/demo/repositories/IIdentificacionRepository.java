package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.example.demo.entities.Identificacion;

import java.util.List;


@Repository
public interface IIdentificacionRepository extends JpaRepository<Identificacion,Integer> {
    @Query("from Identificacion ti where ti.tipoidentificacion like %:tipoidentificacion%" )
    List<Identificacion> buscarNombre(@Param("tipoidentificacion") String tipoidentificacion);
}
