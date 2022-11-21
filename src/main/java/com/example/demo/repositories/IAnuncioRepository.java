package com.example.demo.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.entities.Anuncio;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IAnuncioRepository extends JpaRepository<Anuncio, Integer> {

    @Query("from Anuncio an Where an.titulo like %:titulo%")
    List<Anuncio>buscarTitulo(@Param("titulo") String titulo);

    @Query("from Anuncio an Where an.distrito like %:distrito%")
    List<Anuncio>buscarDistrito(@Param("distrito") String distrito);

    @Query(value = "SELECT * FROM Anuncio Where descripcion like '%Servicios incluidos%'", nativeQuery = true)
    List<Anuncio>buscardominioDescripcion();

    @Query(value = "SELECT * from Anuncio  Where titulo like 'Depa%'", nativeQuery = true)
    List<Anuncio>buscardominioTitulo();

    @Query(value = "SELECT * FROM Anuncio Where precio BETWEEN '1000' AND '900000'", nativeQuery = true)
    List<Anuncio>buscardominioPrecio();

}
