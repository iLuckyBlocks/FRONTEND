import { Arrendador } from "./Arrendador";

export class Contrato{
    idContrato: number=0;
    detallesContrato: string=" ";
    monto: number=0;
    arrendador: Arrendador= new Arrendador();
}