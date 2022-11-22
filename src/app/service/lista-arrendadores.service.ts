import { Injectable } from '@angular/core';
import { ListaArrendadores } from '../interfaces/listaArrendamiento';
import { HttpClient } from '@angular/common/http';
import {Subject} from 'rxjs'
import { environment } from 'src/environments/environment';
import { Arrendador } from '../model/Arrendador';

@Injectable({
  providedIn: 'root'
})
export class ListaArrendadoresService {

  private url: string= `${environment.host}/Arrendador`
  private listaCambio= new Subject<Arrendador[]>()
  private confirmaEliminacion= new Subject<Boolean>()

  constructor(private http:HttpClient) { }


  listar(){
    return this.http.get<Arrendador[]>(this.url);
  }
  //listar = getArrendador()

  insertar(arrendador: Arrendador){
    return this.http.post(this.url, arrendador);
  } 
  //insertar= postArrendador()

  modificar(arrendador: Arrendador){
      return this.http.put(this.url, arrendador);
  }
  //modificar = putArrendador()

  eliminar(id: number){
    return this.http.delete(`${this.url}/${id}`);
  }
  //eliminar= deleteArrendador()

  buscar(texto: string){
    return this.http.post<Arrendador[]>(`${this.url}/buscar`, texto);
  }

  listarId(id:number){
    return this.http.get<Arrendador>(`${this.url}/${id}`);
  }

  getLista(){
    return this.listaCambio.asObservable();
  }

  setLista(listaNueva: Arrendador[]){
    this.listaCambio.next(listaNueva);
  }

  getConfirmacionEliminacion(){
    return this.confirmaEliminacion.asObservable();
  }

  setConfirmaEliminacion(estado: Boolean){
    this.confirmaEliminacion.next(estado);
  }

  reporteContratos(){
    return this.http.get<any[]>(`${this.url}/buscardominioContrato`);}

  reporteCelularArrendador(){
    return this.http.get<Arrendador[]>(`${this.url}/buscardominioCelulares`);
  }

  reporteArrendadoresExtranjeros(){
    return this.http.get<Arrendador[]>(`${this.url}/buscardominioExtranjero`);}
    

  reportePagoTarjeta(){
    return this.http.get<Arrendador[]>(`${this.url}/buscardominioTarjeta`);}

}
