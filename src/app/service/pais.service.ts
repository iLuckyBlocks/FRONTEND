import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pais } from '../model/Pais';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private url: string = `${environment.host}/pais`
  private listaCambio= new Subject<Pais[]>()
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Pais[]>(this.url);
  }

  insertar(_pais: Pais){
      return this.http.post(this.url, _pais);
  }

  modificacion(_pais: Pais){
    return this.http.put(this.url, _pais);
  }

  eliminar(id: number) {

    return this.http.delete(`${this.url}/${id}`);
  }
  
  listarId(id: number) {
    return this.http.get<Pais>(`${this.url}/${id}`);
  }
  
  getLista() {
    return this.listaCambio.asObservable();
  }

  setLista(listaNueva: Pais[]) {
    this.listaCambio.next(listaNueva);
  }

  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }

  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}
