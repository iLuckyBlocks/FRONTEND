import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Contrato } from 'src/app/model/Contrato';
import { ContratoService } from 'src/app/service/contrato.service';
import { DialogoalertComponent } from './dialogoalert/dialogoalert.component';

@Component({
  selector: 'app-contrato-listar',
  templateUrl: './contrato-listar.component.html',
  styleUrls: ['./contrato-listar.component.css']
})
export class ContratoListarComponent implements OnInit {

  lista: Contrato[] = [];
  dataSource: MatTableDataSource<Contrato> = new MatTableDataSource();
  displayedColumns: string[] = ['idContrato', 'detallesContrato', 'monto', 'arrendador','acciones'];
  private idMayor: number = 0;
  constructor(private contratoService: ContratoService,
    private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.contratoService.listar().subscribe(data => {
      this.lista = data;
      this.dataSource = new MatTableDataSource(data);

    });
    this.contratoService.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });

    this.contratoService.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(DialogoalertComponent);
  }
  eliminar(id: number) {
    this.contratoService.eliminar(id).subscribe(() => {
      this.contratoService.listar().subscribe(data => {
        this.contratoService.setLista(data);
      });
    });
  }
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }

}
