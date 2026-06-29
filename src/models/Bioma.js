"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bioma = void 0;
var Bioma = /** @class */ (function () {
    function Bioma(nome, dimensao, categoria) {
        this._nome = nome;
        this._dimensao = dimensao;
        this._categoria = categoria;
    }
    Object.defineProperty(Bioma.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bioma.prototype, "dimensao", {
        get: function () {
            return this._dimensao;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bioma.prototype, "categoria", {
        get: function () {
            return this._dimensao;
        },
        enumerable: false,
        configurable: true
    });
    Bioma.prototype.toString = function () {
        return "Bioma:\n" +
            "\nNome : " + this._nome +
            "\nDimensão : " + this._dimensao +
            "\nCategoria : " + this._categoria;
    };
    Bioma.prototype.atendeCriterio = function (criterio) {
        if (this.nome.toLowerCase().includes(criterio.toLowerCase()) ||
            this.dimensao.toLowerCase().includes(criterio.toLowerCase()) ||
            this.categoria.toLowerCase().includes(criterio.toLowerCase())) {
            return true;
        }
        else {
            return false;
        }
    };
    return Bioma;
}());
exports.Bioma = Bioma;
