import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ListaEstudiantesService } from 'src/app/service/lista-estudiantes.service';

@Component({
  selector: 'app-dialogo-es',
  templateUrl: './dialogo-es.component.html',
  styleUrls: ['./dialogo-es.component.css']
})
export class DialogoEsComponent implements OnInit {

  constructor(private _estudianteService: ListaEstudiantesService, private  dialogRef: MatDialogRef<DialogoEsComponent>) { }

  ngOnInit(): void {
  }

  confirmar(estado: boolean){
    this._estudianteService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
