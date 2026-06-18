"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bioma = void 0;
class Bioma {
    _nome;
    _dimensao;
    _categoria;
    constructor(nome, dimensao, categoria) {
        this._nome = nome;
        this._dimensao = dimensao;
        this._categoria = categoria;
    }
    get nome() {
        return this._nome;
    }
    get dimensao() {
        return this._dimensao;
    }
    get categoria() {
        return this._dimensao;
    }
    toString() {
        return "Bioma:\n" +
            "\nNome : " + this._nome +
            "\nDimensão : " + this._dimensao +
            "\nCategoria : " + this._categoria;
    }
}
exports.Bioma = Bioma;
//# sourceMappingURL=Bioma.js.map