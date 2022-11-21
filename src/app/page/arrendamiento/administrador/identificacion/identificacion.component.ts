import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TipodeIdentificacionService } from 'src/app/service/TipodeIdentificacion.service';


@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
