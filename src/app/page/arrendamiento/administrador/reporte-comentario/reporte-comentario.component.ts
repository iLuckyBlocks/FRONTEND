import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Comentario } from 'src/app/model/Comentario';
import { ComentarioService } from 'src/app/service/comentario.service';

@Component({
  selector: 'app-reporte-comentario',
  templateUrl: './reporte-comentario.component.html',
  styleUrls: ['./reporte-comentario.component.css']
})
export class ReporteComentarioComponent implements OnInit {

  dataSource: MatTableDataSource<Comentario> = new MatTableDataSource();
  displayedColumns:string[]= ['idComentario', 'comentario','arrendador']

  constructor( private comService: ComentarioService) { }

  ngOnInit(): void {
    this.comService.reporteComentarios().subscribe(data=>{
      this.dataSource= new MatTableDataSource(data);
    })
  }

}
