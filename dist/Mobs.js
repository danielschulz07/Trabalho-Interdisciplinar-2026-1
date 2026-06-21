"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mobs = void 0;
class Mobs {
    static _idMob = 0;
    _nome;
    _tipo;
    _vida;
    _descricao;
    constructor(nome, tipo, vida, descricao) {
        this._nome = nome;
        this._tipo = tipo;
        this._vida = vida;
        this._descricao = descricao;
        Mobs._idMob++;
    }
    static get idMob() {
        return this._idMob;
    }
    static set idMob(novoIdMob) {
        this._idMob = novoIdMob;
    }
    get nome() {
        return this._nome;
    }
    set nome(Novonome) {
        this.nome = Novonome;
    }
    get tipo() {
        return this._tipo;
    }
    set tipo(Novotipo) {
        this.tipo = Novotipo;
    }
    get vida() {
        return this._vida;
    }
    set vida(Novovida) {
        this.vida = Novovida;
    }
    get descricao() {
        return this._descricao;
    }
    set descricao(Novodescricao) {
        this.descricao = Novodescricao;
    }
    toString() {
        return '\n\t"nome" : "' + this._nome + '" ,' +
            '\n\t"tipo" : "' + this._tipo + '" ,' +
            '\n\t"vida" : "' + this._vida + '" ,' +
            '\n\t"descricao" : "' + this._descricao + '"';
    }
}
exports.Mobs = Mobs;
//# sourceMappingURL=Mobs.js.map