import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ContratoService } from 'src/app/service/contrato.service';

@Component({
  selector: 'app-dialogoalert',
  templateUrl: './dialogoalert.component.html',
  styleUrls: ['./dialogoalert.component.css']
})
export class DialogoalertComponent implements OnInit {

  constructor(private contratoService: ContratoService,
    private dialogRef: MatDialogRef<DialogoalertComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.contratoService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
