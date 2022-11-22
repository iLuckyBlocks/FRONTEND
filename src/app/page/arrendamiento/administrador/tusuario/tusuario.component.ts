import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tusuario',
  templateUrl: './tusuario.component.html',
  styleUrls: ['./tusuario.component.css']
})
export class TusuarioComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
