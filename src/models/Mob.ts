import { Bioma } from "./Bioma";
import { IPesquisavel } from "./IPesquisavel";

export class Mob implements IPesquisavel{
    private static _idMob: number = 0;
    private _nome: string;
    private _tipo: string;
    private _vida: number;
    private _descricao: string;
    private _bioma: Bioma;


constructor(nome: string, tipo: string, vida: number, descricao: string, bioma: Bioma){
        this._nome = nome;
        this._tipo = tipo;
        this._vida = vida;
        this._descricao = descricao;
        this._bioma = bioma;
}

    public static get idMob(): number {
        return this._idMob;
    }
    
    public static set idMob(novoIdMob: number) {
        this._idMob = novoIdMob;
    }

    public get nome(): string {
        return this._nome;
    }

    public set nome(Novonome: string){
        this.nome = Novonome;
    }

    public get tipo(): string {
        return this._tipo;
    }
    
    public set tipo(Novotipo: string) {
        this.tipo = Novotipo;
    }

    public get vida(): number {
        return this._vida;
    }

    public set vida(Novovida: number) {
        this.vida = Novovida;
    }

    public get descricao(): string {
        return this._descricao;
    }

    public set descricao(Novodescricao: string) {
        this.descricao = Novodescricao;
    }

    public toString(): string{
     return '\n\t"Nome" : "' + this._nome + '" ,' +
            '\n\t"Tipo" : "' + this._tipo + '" ,' +
            '\n\t"Vida" : "' + this._vida + '" ,' +
            '\n\t"Descricao" : "' + this._descricao + '"';
}

    public atendeCriterio(criterio: string): boolean {
        if(this.nome.toLowerCase().includes(criterio.toLowerCase()) ||
           this.tipo.toLowerCase().includes(criterio.toLowerCase())){
            return true;
        } else {
            return false;
        }
    }
}