import { Bioma } from "./Bioma";
import { Mob } from "./Mob";

export class MobHostil extends Mob{
    private _dano: number;

    constructor(nome: string, tipo: string, vida: number, descricao: string, bioma: Bioma,dano: number){
        super(nome, tipo, vida, descricao, bioma);

        this._dano = dano;
    }

    public get dano(): number{
        return this._dano;
    }

    public set dano(novoDano: number){
        this._dano = novoDano;
    }

    public atacar(): string{
        return "O mob " + this.nome + " fez um ataque e infligiu " + this._dano + " de dano!";
    }

    public toString(): string {
        return super.toString() +
               '\n\t"dano" : "' + this._dano + '"';
    }
}