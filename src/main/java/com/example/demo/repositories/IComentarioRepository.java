package com.example.demo.repositories;

import com.example.demo.entities.Estudiante;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.entities.Comentario;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IComentarioRepository extends JpaRepository<Comentario, Integer>{

    @Query("from Comentario com Where com.comentario like %:comentario%")
    List<Comentario>buscarComentario(@Param("comentario") String comentario);

    @Query("from Comentario com Where com.arrendador.nombre like %:nombre%")
    List<Comentario>buscarPorArrendador(@Param("nombre") String nombre);

    @Query(value = "SELECT * from Arrendador arr JOIN Comentario com ON arr.id_arrendador= com.id_anuncio", nativeQuery = true)
    List<Comentario>buscardominioComentario();
}
