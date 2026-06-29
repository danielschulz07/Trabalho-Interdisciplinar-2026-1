"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mob = void 0;
var Mob = /** @class */ (function () {
    function Mob(nome, tipo, vida, descricao) {
        this._nome = nome;
        this._tipo = tipo;
        this._vida = vida;
        this._descricao = descricao;
        Mob._idMob++;
    }
    Object.defineProperty(Mob, "idMob", {
        get: function () {
            return this._idMob;
        },
        set: function (novoIdMob) {
            this._idMob = novoIdMob;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mob.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (Novonome) {
            this.nome = Novonome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mob.prototype, "tipo", {
        get: function () {
            return this._tipo;
        },
        set: function (Novotipo) {
            this.tipo = Novotipo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mob.prototype, "vida", {
        get: function () {
            return this._vida;
        },
        set: function (Novovida) {
            this.vida = Novovida;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mob.prototype, "descricao", {
        get: function () {
            return this._descricao;
        },
        set: function (Novodescricao) {
            this.descricao = Novodescricao;
        },
        enumerable: false,
        configurable: true
    });
    Mob.prototype.toString = function () {
        return '\n\t"Nome" : "' + this._nome + '" ,' +
            '\n\t"Tipo" : "' + this._tipo + '" ,' +
            '\n\t"Vida" : "' + this._vida + '" ,' +
            '\n\t"Descricao" : "' + this._descricao + '"';
    };
    Mob.prototype.atendeCriterio = function (criterio) {
        if (this.nome.toLowerCase().includes(criterio.toLowerCase()) ||
            this.tipo.toLowerCase().includes(criterio.toLowerCase())) {
            return true;
        }
        else {
            return false;
        }
    };
    Mob._idMob = 0;
    return Mob;
}());
exports.Mob = Mob;
