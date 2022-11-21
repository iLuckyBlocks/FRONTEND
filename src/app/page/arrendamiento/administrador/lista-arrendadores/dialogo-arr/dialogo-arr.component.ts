import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ListaArrendadoresService } from 'src/app/service/lista-arrendadores.service';

@Component({
  selector: 'app-dialogo-arr',
  templateUrl: './dialogo-arr.component.html',
  styleUrls: ['./dialogo-arr.component.css']
})
export class DialogoArrComponent implements OnInit {

  constructor(private _arrendadorService: ListaArrendadoresService, private  dialogRef: MatDialogRef<DialogoArrComponent>) { }

  ngOnInit(): void {
  }

  confirmar(estado: boolean){
    this._arrendadorService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
