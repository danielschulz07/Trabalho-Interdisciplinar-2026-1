"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobHostil = void 0;
const Mob_1 = require("./Mob");
class MobHostil extends Mob_1.Mob {
    _dano;
    constructor(nome, tipo, vida, descricao, dano) {
        super(nome, tipo, vida, descricao);
        this._dano = dano;
    }
    get dano() {
        return this._dano;
    }
    set dano(novoDano) {
        this._dano = novoDano;
    }
    atacar() {
        return "O mob " + super.nome + " fez um ataque e infligiu " + this._dano + " de dano!";
    }
    toString() {
        return super.toString() +
            '\n\t"dano" : "' + this._dano + '"';
    }
}
exports.MobHostil = MobHostil;
//# sourceMappingURL=MobHostil.js.map