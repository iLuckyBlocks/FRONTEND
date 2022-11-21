import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comentario } from '../model/Comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  private url: string = `${environment.host}/comentarios`
  private listaCambio= new Subject<Comentario[]>()
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Comentario[]>(this.url);
  }

  insertar(comentario: Comentario){
      return this.http.post(this.url, comentario);
  }

  modificacion(comentario: Comentario){
    return this.http.put(this.url, comentario);
  }

  eliminar(id: number) {

    return this.http.delete(`${this.url}/${id}`);
  }
  
  listarId(id: number) {
    return this.http.get<Comentario>(`${this.url}/${id}`);
  }
  
  getLista() {
    return this.listaCambio.asObservable();
  }

  setLista(listaNueva: Comentario[]) {
    this.listaCambio.next(listaNueva);
  }

  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }

  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }

  reporteComentarios(){
    return this.http.get<Comentario[]>(`${this.url}/buscardominioComentario`);}
  
    

}
