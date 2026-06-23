import { Mob } from "./Mob";

export class MobPassivo extends Mob{
    constructor(nome: string, tipo: string, vida: number, descricao: string){
        super(nome, tipo, vida, descricao);
    }
}