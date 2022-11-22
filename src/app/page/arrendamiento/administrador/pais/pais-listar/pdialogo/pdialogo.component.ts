import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PaisService } from 'src/app/service/pais.service';

@Component({
  selector: 'app-pdialogo',
  templateUrl: './pdialogo.component.html',
  styleUrls: ['./pdialogo.component.css']
})
export class PdialogoComponent implements OnInit {

  constructor(private _paisService: PaisService, private dialogRef:MatDialogRef<PdialogoComponent>) { }

  ngOnInit(): void {
    
  }

  confirmar(estado: boolean) {
    this._paisService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
