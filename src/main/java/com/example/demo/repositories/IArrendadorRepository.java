package com.example.demo.repositories;

import com.example.demo.entities.Arrendador;
import com.example.demo.entities.Estudiante;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IArrendadorRepository extends JpaRepository<Arrendador, Integer> {

    @Query("from Arrendador arr Where arr.nombre like %:nombre%")
    List<Arrendador>buscarNombreUsuario(@Param("nombre") String nombre);


    @Query("from Arrendador arr Where arr.identificacion.tipoidentificacion like %:tipoidentificacion")
    List<Arrendador>buscarPorIdentificacion(@Param("tipoidentificacion") String tipoidentificacion);

    @Query(value = "SELECT * FROM Arrendador es JOIN Contrato con ON es.id_arrendador= con.id_arrendador", nativeQuery = true)
    List<Arrendador>buscardominioContrato();

    @Query(value = "select * from Arrendador arr where arr.celular like '9%'", nativeQuery = true)
    List<Arrendador>buscardominioCelular();

    @Query(value = "select * from Arrendador WHERE id_pais!=1", nativeQuery = true)
    List<Arrendador>buscardominioExtranjero();

    @Query(value = "select * from Arrendador where id_metodo_pago=1", nativeQuery = true)
    List<Arrendador>buscardominioTarjeta();
}
