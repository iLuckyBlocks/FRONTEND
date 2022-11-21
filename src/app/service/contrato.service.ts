import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contrato } from '../model/Contrato';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {

  private url: string = `${environment.host}/Contrato`
  private listaCambio= new Subject<Contrato[]>()
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Contrato[]>(this.url);
  }

  insertar(contrato: Contrato){
      return this.http.post(this.url, contrato);
  }

  modificacion(contrato: Contrato){
    return this.http.put(this.url, contrato);
  }

  eliminar(id: number) {

    return this.http.delete(`${this.url}/${id}`);
  }
  
  listarId(id: number) {
    return this.http.get<Contrato>(`${this.url}/${id}`);
  }
  
  getLista() {
    return this.listaCambio.asObservable();
  }

  setLista(listaNueva: Contrato[]) {
    this.listaCambio.next(listaNueva);
  }

  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }

  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}
