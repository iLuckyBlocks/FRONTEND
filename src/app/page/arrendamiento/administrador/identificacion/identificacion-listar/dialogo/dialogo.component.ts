import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TipodeIdentificacionService } from 'src/app/service/TipodeIdentificacion.service';

@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.css']
})
export class DialogoComponent implements OnInit {

  constructor(private tipoideService: TipodeIdentificacionService, private dialogRef:MatDialogRef<DialogoComponent>) { }

  ngOnInit(): void {
  }

  confirmar(estado: boolean) {
    this.tipoideService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
