import { Component, OnInit,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ListaEstudiantes } from 'src/app/interfaces/listaEstudiantes';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MenuAdmin } from 'src/app/interfaces/menuAdmin';
import { ListaEstudiantesService } from 'src/app/service/lista-estudiantes.service';
import { MenuAdministradorService } from 'src/app/service/menu-administrador.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogoEsComponent } from './dialogo-es/dialogo-es.component';
import { Estudiante } from 'src/app/model/Estudiante';

@Component({
  selector: 'app-lista-estudiantes',
  templateUrl: './lista-estudiantes.component.html',
  styleUrls: ['./lista-estudiantes.component.css']
})
export class ListaEstudiantesComponent implements OnInit {
  
  lista: Estudiante[]=[];
  dataSource: MatTableDataSource<Estudiante>= new MatTableDataSource();
  displayedColumns: string[] = ['idEstudiante', 'nombre', 'celular', 'correo_electronico', 'password','pais', 'identificacion', 'metodoPago', 'tipo' , 'acciones'];
  private idMayor: number=0;

  constructor(private _estudianteService:ListaEstudiantesService, private dialog: MatDialog) { }

  ngOnInit(): void { 

    this._estudianteService.listar().subscribe(data=>{
      this.lista=data;
      this.dataSource= new MatTableDataSource(data);
      
    });

    this._estudianteService.getLista().subscribe(data=>{
      this.dataSource= new MatTableDataSource(data);
      console.log(data);
    });

    this._estudianteService.getConfirmacionEliminacion().subscribe(data=>{
      data == true ? this.eliminar(this.idMayor): false; 
    });

  }

   //Paginacion
   @ViewChild(MatPaginator) paginator!:MatPaginator;
   @ViewChild(MatSort) sort!:MatSort

   ngAfterViewInit(){
     this.dataSource.paginator=this.paginator;
   }

    confirmar(id: number){
      this.idMayor= id;
      this.dialog.open(DialogoEsComponent);
    
    }

    eliminar(id: number){
      this._estudianteService.eliminar(id).subscribe(()=>{
        this._estudianteService.listar().subscribe(data=>{
          this._estudianteService.setLista(data);
        });
      });
    }

  filtrar(e: any) {
      this.dataSource.filter= e.target.value.trim();
  }

}
