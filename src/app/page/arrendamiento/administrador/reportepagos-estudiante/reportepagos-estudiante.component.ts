import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Estudiante } from 'src/app/model/Estudiante';
import { ListaEstudiantesService } from 'src/app/service/lista-estudiantes.service';

@Component({
  selector: 'app-reportepagos-estudiante',
  templateUrl: './reportepagos-estudiante.component.html',
  styleUrls: ['./reportepagos-estudiante.component.css']
})
export class ReportepagosEstudianteComponent implements OnInit {

  dataSource: MatTableDataSource<Estudiante> = new MatTableDataSource();
  displayedColumns:string[]= ['idEstudiante', 'nombre','celular','correo_electronico','password','pais','identificacion', 'metodoPago', 'tipo']

  constructor( private esService: ListaEstudiantesService) { }

  ngOnInit(): void {
    this.esService.reportePagos().subscribe(data=>{
      this.dataSource= new MatTableDataSource(data);
    })
  }


}
