import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Estudiante } from 'src/app/model/Estudiante';
import { ListaEstudiantesService } from 'src/app/service/lista-estudiantes.service';

@Component({
  selector: 'app-reporte-extranjeros',
  templateUrl: './reporte-extranjeros.component.html',
  styleUrls: ['./reporte-extranjeros.component.css']
})
export class ReporteExtranjerosComponent implements OnInit {

  dataSource: MatTableDataSource<Estudiante> = new MatTableDataSource();
  displayedColumns:string[]= ['idEstudiante', 'nombre','celular','correo_electronico','password','pais','identificacion', 'metodoPago', 'tipo']

  constructor( private esService: ListaEstudiantesService) { }

  ngOnInit(): void {
    this.esService.reporteExtranjeros().subscribe(data=>{
      this.dataSource= new MatTableDataSource(data);
    })
  }

}
