export class Mobs {
    private static _idMob: number = 0;
    private _nome: string;
    private _tipo: string;
    private _vida: number;
    private _descricao: string;


constructor(nome: string, tipo: string, vida: number, descricao: string){
        this._nome = nome;
        this._tipo = tipo;
        this._vida = vida;
        this._descricao = descricao;
        Mobs._idMob++
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
     return '\n\t"nome" : "' + this._nome + '" ,' +
            '\n\t"tipo" : "' + this._tipo + '" ,' +
            '\n\t"vida" : "' + this._vida + '" ,' +
            '\n\t"descricao" : "' + this._descricao + '"';
}
}