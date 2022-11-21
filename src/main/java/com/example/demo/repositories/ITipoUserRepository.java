package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.example.demo.entities.TipoUsuario;

import java.util.List;

@Repository
public interface ITipoUserRepository extends JpaRepository<TipoUsuario, Integer> {
    //modificado
    @Query("from TipoUsuario p WHERE p.tipoUsuario like %:tipoUsuario%")
    List<TipoUsuario>buscarNombre(@Param("tipoUsuario") String tipoUsuario);
}
