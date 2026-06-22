"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mob = void 0;
class Mob {
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
        Mob._idMob++;
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
        return '\n\t"Nome" : "' + this._nome + '" ,' +
            '\n\t"Tipo" : "' + this._tipo + '" ,' +
            '\n\t"Vida" : "' + this._vida + '" ,' +
            '\n\t"Descricao" : "' + this._descricao + '"';
    }
}
exports.Mob = Mob;
//# sourceMappingURL=Mob.js.map