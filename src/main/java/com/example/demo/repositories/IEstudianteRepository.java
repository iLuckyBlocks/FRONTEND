package com.example.demo.repositories;

import com.example.demo.entities.Estudiante;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IEstudianteRepository extends JpaRepository<Estudiante,Integer> {

    @Query("from Estudiante u Where u.nombre like %:nombre%")
    List<Estudiante> buscarNombre(@Param("nombre") String nombre);

   List<Estudiante>findByCelular(String valor);

    @Query(value = "select * from Estudiante e where e.celular like '9%'", nativeQuery = true)
    List<Estudiante>buscardominio();


  /*  List<Estudiante>findByNombre(String nombre);
    @Query(value = "select * from Estudiante e where e.nombre like '% '", nativeQuery = true)
    List<Estudiante>buscardominioNombres();
   */

    @Query(value = "select * from Estudiante WHERE id_pais!=1", nativeQuery = true)
    List<Estudiante>buscardominioPais();

    @Query(value = "select * from Estudiante where id_metodo_pago=1", nativeQuery = true)
    List<Estudiante>buscardominioPagos();


}
