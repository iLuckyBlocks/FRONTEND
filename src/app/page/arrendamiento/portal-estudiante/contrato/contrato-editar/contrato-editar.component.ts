import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Arrendador } from 'src/app/model/Arrendador';
import { Contrato } from 'src/app/model/Contrato';
import { ContratoService } from 'src/app/service/contrato.service';
import { ListaArrendadoresService } from 'src/app/service/lista-arrendadores.service';

@Component({
  selector: 'app-contrato-editar',
  templateUrl: './contrato-editar.component.html',
  styleUrls: ['./contrato-editar.component.css']
})
export class ContratoEditarComponent implements OnInit {

  contrato: Contrato = new Contrato();
  id: number = 0;
  edicion: boolean = false;
  listaArrendadores: Arrendador[]=[];
  idArrendadorSeleccionado: number=0;

  constructor(private contratoService: ContratoService,
    private route: ActivatedRoute,
    private router: Router, private arrendadorService: ListaArrendadoresService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
      this.arrendadorService.listar().subscribe(data=>{this.listaArrendadores=data});

  }
  aceptar() {
    if (this.contrato.detallesContrato.length>0 && this.idArrendadorSeleccionado>0) {

      let p= new Arrendador();
      p.idArrendador=this.idArrendadorSeleccionado;
      this.contrato.arrendador=p;

      if (this.edicion) {
        this.contratoService.modificacion(this.contrato).subscribe(() => {
          this.contratoService.listar().subscribe(data => {
            this.contratoService.setLista(data);
          });
        });

      } else {

        this.contratoService.insertar(this.contrato).subscribe(() => {
          this.contratoService.listar().subscribe(data => {
            this.contratoService.setLista(data);
          });
        });
      }
      this.router.navigate(['/portal-estudiante/contrato']);
    } 
  }
  init() {
    if (this.edicion) {
      this.contratoService.listarId(this.id).subscribe(data => {
        this.contrato = data
        console.log(data);
        this.idArrendadorSeleccionado=data.arrendador.idArrendador;
      });

    }

  }
}
