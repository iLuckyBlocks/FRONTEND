import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MetodoPago } from 'src/app/model/MetodoPago';
import { MetodoPagoService } from 'src/app/service/metodo-pago.service';

@Component({
  selector: 'app-pagos-editar',
  templateUrl: './pagos-editar.component.html',
  styleUrls: ['./pagos-editar.component.css']
})
export class PagosEditarComponent implements OnInit {

  metodoPago: MetodoPago= new MetodoPago();
  id:number=0;
  edicion:boolean=false;
  mensaje:string="";

  constructor(private _metodoService: MetodoPagoService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((data:Params)=>{
      this.id=data['id'];
      this.edicion=data['id']!=null;
      this.init();
    });
  }

  aceptar(){
    if(this.metodoPago.formaPago.length>0){
      if(this.edicion){
        this._metodoService.modificacion(this.metodoPago).subscribe(()=>{
          this._metodoService.listar().subscribe(data=>{
            this._metodoService.setLista(data);
          });
        });
      }else{
        this._metodoService.insertar(this.metodoPago).subscribe(()=>{
          this._metodoService.listar().subscribe(data=>{
            this._metodoService.setLista(data);
          });
        });
      }
      this.router.navigate(['/administrador/metodo'])  ; 

     }else{
      this.mensaje="Complete todo lo solicitado";
     }
  }

  init(){
    if(this.edicion){
      this._metodoService.listarId(this.id).subscribe(data=>{
        this.metodoPago=data
        console.log(data);
      });
    }
  }
}
