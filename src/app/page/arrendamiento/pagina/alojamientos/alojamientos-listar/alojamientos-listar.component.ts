import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Alojamiento } from 'src/app/interfaces/alojamiento';
import { AlojamientoService } from 'src/app/service/alojamiento.service';
import { Anuncio } from 'src/app/model/Anuncio';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import{MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CdkObserveContent } from '@angular/cdk/observers';
import { MidialogComponent } from './midialog/midialog.component';

@Component({
  selector: 'app-alojamientos-listar',
  templateUrl: './alojamientos-listar.component.html',
  styleUrls: ['./alojamientos-listar.component.css']
})
export class AlojamientosListarComponent implements OnInit {

  lista: Anuncio[]=[];
  dataSource: MatTableDataSource<Anuncio>= new MatTableDataSource();  
  displayedColumns: string[] = ['idAnuncio', 'imagen', 'titulo', 'precio', 'descripcion','distrito', 'direccion', 'acciones' ];

  private idMayor:number=0;

  constructor(private _AlojamientoService: AlojamientoService, private router:Router , private dialog: MatDialog ) { }


  ngOnInit(): void {
    this._AlojamientoService.listar().subscribe(data => {
      this.lista = data;
      this.dataSource = new MatTableDataSource(data);

    });
    this._AlojamientoService.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });

    this._AlojamientoService.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(MidialogComponent);
  }

  eliminar(id: number) {
    this._AlojamientoService.eliminar(id).subscribe(() => {
      this._AlojamientoService.listar().subscribe(data => {
        this._AlojamientoService.setLista(data);
      });
    });
  }
  
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }



}
