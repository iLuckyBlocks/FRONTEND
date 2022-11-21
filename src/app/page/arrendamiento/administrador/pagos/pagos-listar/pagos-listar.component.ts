import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MetodoPago } from 'src/app/model/MetodoPago';
import { MetodoPagoService } from 'src/app/service/metodo-pago.service';
import { MDialogoComponent } from './mdialogo/mdialogo.component';

@Component({
  selector: 'app-pagos-listar',
  templateUrl: './pagos-listar.component.html',
  styleUrls: ['./pagos-listar.component.css']
})
export class PagosListarComponent implements OnInit {

  lista:MetodoPago[]=[];
  dataSource: MatTableDataSource<MetodoPago>=new MatTableDataSource();
  displayedColumns:string[]=['idMetodoPago', 'formaPago', 'acciones'];
  private idMayor: number = 0;

  constructor(private _metodoService: MetodoPagoService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this._metodoService.listar().subscribe(data=>{
      this.lista=data;
      this.dataSource= new MatTableDataSource(data);
    });

    this._metodoService.getLista().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    });

    this._metodoService.getConfirmaEliminacion().subscribe(data=>{
      data==true ? this.eliminar(this.idMayor):false;
    });

  }

  confirmar(id:number){
    this.idMayor=id;
    this.dialog.open(MDialogoComponent);
  }

  eliminar(id:number){
    this._metodoService.eliminar(id).subscribe(()=>{
      this._metodoService.listar().subscribe(data=>{
        this._metodoService.setLista(data);
      });
    });
  }

  filtrar(e:any){
    this.dataSource.filter=e.target.value.trim();
  }
}
