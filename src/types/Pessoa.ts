import type { Usuario } from "./Usuario";

export interface Pessoa{
    id:number,
    nome:string,
    usuario?:Usuario
}