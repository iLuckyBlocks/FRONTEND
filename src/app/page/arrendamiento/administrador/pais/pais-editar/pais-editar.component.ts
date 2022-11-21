import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Pais } from 'src/app/model/Pais';
import { PaisService } from 'src/app/service/pais.service';

@Component({
  selector: 'app-pais-editar',
  templateUrl: './pais-editar.component.html',
  styleUrls: ['./pais-editar.component.css']
})
export class PaisEditarComponent implements OnInit {

  EsPais: Pais= new Pais();
  id:number=0;
  edicion:boolean=false;
  mensaje:string="";

  constructor(private paisService: PaisService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((data:Params)=>{
      this.id=data['id'];
      this.edicion=data['id']!=null;
      this.init();
    });
  }

  aceptar(){
    if(this.EsPais.pais.length>0){
      if(this.edicion){
        this.paisService.modificacion(this.EsPais).subscribe(()=>{
          this.paisService.listar().subscribe(data=>{
            this.paisService.setLista(data);
          });
        });
      }else{
        this.paisService.insertar(this.EsPais).subscribe(()=>{
          this.paisService.listar().subscribe(data=>{
            this.paisService.setLista(data);
          });
        });
      }
      this.router.navigate(['/administrador/pais'])  ; 

     }else{
      this.mensaje="Complete todo lo solicitado";
     }
  }

  init(){
    if(this.edicion){
      this.paisService.listarId(this.id).subscribe(data=>{
        this.EsPais=data
        console.log(data);
      });
    }
  }


}
