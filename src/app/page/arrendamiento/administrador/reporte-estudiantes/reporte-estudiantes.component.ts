import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Estudiante } from 'src/app/model/Estudiante';
import { ListaEstudiantesService } from 'src/app/service/lista-estudiantes.service';


@Component({
  selector: 'app-reporte-estudiantes',
  templateUrl: './reporte-estudiantes.component.html',
  styleUrls: ['./reporte-estudiantes.component.css']
})
export class ReporteEstudiantesComponent implements OnInit {

  dataSource: MatTableDataSource<Estudiante> = new MatTableDataSource();
  displayedColumns:string[]= ['idEstudiante', 'nombre','celular','correo_electronico','password','pais','identificacion', 'metodoPago', 'tipo']

  constructor( private esService: ListaEstudiantesService) { }

  ngOnInit(): void {
    this.esService.reporte().subscribe(data=>{
      this.dataSource= new MatTableDataSource(data);
    })
  }


}
