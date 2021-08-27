import { Tema } from "./Tema"
import { Usuario } from "./Usuario"

export class Postagem {
    public id: number
    public tipo: string
    public data: Date //Date sempre com letra  maiúscula
    public texto: string
    public titulo: string
    public usuario: Usuario
    public tema: Tema

}