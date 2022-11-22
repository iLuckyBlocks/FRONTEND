import { Pais } from "./Pais";
import { Identificacion } from "./Identificacion";
import { MetodoPago } from "./MetodoPago";
import { TipoUsuario } from "./tipoUsuario";

export class Estudiante{
    idEstudiante: number=0;
    nombre: string=" ";
    celular:string=" ";
    correo_electronico: string= "";
    password: string= " ";
    pais: Pais= new Pais();
    identificacion: Identificacion= new Identificacion();
    metodoPago: MetodoPago= new MetodoPago();
    tipo: TipoUsuario= new TipoUsuario();
}
