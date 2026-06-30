import { Bioma } from "./Bioma";
import { Mob } from "./Mob";

export class MobPassivo extends Mob{
    constructor(nome: string, tipo: string, vida: number, descricao: string, bioma: Bioma){
        super(nome, tipo, vida, descricao, bioma);
    }
}