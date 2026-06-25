import { IPesquisavel } from "./IPesquisavel";

export class Bioma implements IPesquisavel{
    private _nome: string;
    private _dimensao: string;
    private _categoria: string;

    constructor(nome: string, dimensao: string, categoria: string) {
        this._nome = nome;
        this._dimensao = dimensao;
        this._categoria = categoria;
    }

    public get nome(): string {
        return this._nome;
    }

    public get dimensao(): string {
        return this._dimensao;
    }

    public get categoria(): string {
        return this._dimensao;
    }

    public toString(): string{
        return "Bioma:\n"+
            "\nNome : " + this._nome +
            "\nDimensão : " + this._dimensao +
            "\nCategoria : " + this._categoria;
    }

    public atendeCriterio(criterio: string): boolean {
        if(this.nome.toLowerCase().includes(criterio.toLowerCase()) ||
           this.dimensao.toLowerCase().includes(criterio.toLowerCase()) ||
           this.categoria.toLowerCase().includes(criterio.toLowerCase())){
            return true;
        } else {
            return false;
        }
    }
}