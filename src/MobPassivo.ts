import { Mobs } from "./Mobs";

export class MobPassivo extends Mobs{
    constructor(nome: string, tipo: string, vida: number, descricao: string){
        super(nome, tipo, vida, descricao);
    }
}