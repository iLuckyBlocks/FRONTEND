import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Identificacion } from 'src/app/model/Identificacion';
import { TipodeIdentificacionService } from 'src/app/service/TipodeIdentificacion.service';

@Component({
  selector: 'app-identificacion-editar',
  templateUrl: './identificacion-editar.component.html',
  styleUrls: ['./identificacion-editar.component.css']
})
export class IdentificacionEditarComponent implements OnInit {

  identificacion: Identificacion= new Identificacion();
  id:number=0;
  edicion:boolean=false;
  mensaje:string="";

  constructor(private identificacionService: TipodeIdentificacionService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((data:Params)=>{
      this.id=data['id'];
      this.edicion=data['id']!=null;
      this.init();
    });
  }

  aceptar(){
    if(this.identificacion.tipoidentificacion.length>0){
      if(this.edicion){
        this.identificacionService.modificacion(this.identificacion).subscribe(()=>{
          this.identificacionService.listar().subscribe(data=>{
            this.identificacionService.setLista(data);
          });
        });
      }else{
        this.identificacionService.insertar(this.identificacion).subscribe(()=>{
          this.identificacionService.listar().subscribe(data=>{
            this.identificacionService.setLista(data);
          });
        });
      }
      this.router.navigate(['/administrador/identificacion'])  ; 

     }else{
      this.mensaje="Complete todo lo solicitado";
     }
  }

  init(){
    if(this.edicion){
      this.identificacionService.listarId(this.id).subscribe(data=>{
        this.identificacion=data
        console.log(data);
      });
    }
  }

}
