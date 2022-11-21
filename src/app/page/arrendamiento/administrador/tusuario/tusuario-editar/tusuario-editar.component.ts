import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TipoUsuario } from 'src/app/model/tipoUsuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-tusuario-editar',
  templateUrl: './tusuario-editar.component.html',
  styleUrls: ['./tusuario-editar.component.css']
})
export class TusuarioEditarComponent implements OnInit {

  tipo: TipoUsuario= new TipoUsuario();
  id:number=0;
  edicion:boolean=false;
  mensaje:string="";
  
  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((data:Params)=>{
      this.id=data['id'];
      this.edicion=data['id']!=null;
      this.init();
    });
  }

  aceptar(){
    if(this.tipo.tipoUsuario.length>0){
      if(this.edicion){
        this.usuarioService.modificacion(this.tipo).subscribe(()=>{
          this.usuarioService.listar().subscribe(data=>{
            this.usuarioService.setLista(data);
          });
        });
      }else{
        this.usuarioService.insertar(this.tipo).subscribe(()=>{
          this.usuarioService.listar().subscribe(data=>{
            this.usuarioService.setLista(data);
          });
        });
      }
      this.router.navigate(['/administrador/usuario'])  ; 

     }else{
      this.mensaje="Complete todo lo solicitado";
     }
  }

  init(){
    if(this.edicion){
      this.usuarioService.listarId(this.id).subscribe(data=>{
        this.tipo=data
        console.log(data);
      });
    }
  }


}
