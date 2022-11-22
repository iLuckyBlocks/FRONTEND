import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ListaArrendadores } from 'src/app/interfaces/listaArrendamiento';
import { MenuAdmin } from 'src/app/interfaces/menuAdmin';
import { MenuAdministradorService } from 'src/app/service/menu-administrador.service';
import { ListaEstudiantesService } from 'src/app/service/lista-estudiantes.service';
import { ListaArrendadoresService } from 'src/app/service/lista-arrendadores.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Arrendador } from 'src/app/model/Arrendador';
import { MatDialog } from '@angular/material/dialog';
import { DialogoArrComponent } from './dialogo-arr/dialogo-arr.component';

@Component({
  selector: 'app-lista-arrendadores',
  templateUrl: './lista-arrendadores.component.html',
  styleUrls: ['./lista-arrendadores.component.css']
})
export class ListaArrendadoresComponent implements OnInit {

  lista: Arrendador[]=[];
  dataSource: MatTableDataSource<Arrendador>= new MatTableDataSource();
  displayedColumns: string[] = ['idArrendador', 'nombre', 'celular', 'correo_electronico', 'password', 'direccion','propiedad','pais', 'identificacion', 'metodoPago', 'tipo' , 'acciones'];
  private idMayor: number=0;

  constructor(private _arrendadorService: ListaArrendadoresService, private dialog: MatDialog) { }

  ngOnInit(): void {
    
    this._arrendadorService.listar().subscribe(data=>{
      this.lista=data;
      this.dataSource= new MatTableDataSource(data);
      
    });

    this._arrendadorService.getLista().subscribe(data=>{
      this.dataSource= new MatTableDataSource(data);
      console.log(data);
    });

    this._arrendadorService.getConfirmacionEliminacion().subscribe(data=>{
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
      this.dialog.open(DialogoArrComponent);
    
    }

    eliminar(id: number){
      this._arrendadorService.eliminar(id).subscribe(()=>{
        this._arrendadorService.listar().subscribe(data=>{
          this._arrendadorService.setLista(data);
        });
      });
    }

  applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
