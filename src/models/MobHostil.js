"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobHostil = void 0;
var Mob_1 = require("./Mob");
var MobHostil = /** @class */ (function (_super) {
    __extends(MobHostil, _super);
    function MobHostil(nome, tipo, vida, descricao, dano) {
        var _this = _super.call(this, nome, tipo, vida, descricao) || this;
        _this._dano = dano;
        return _this;
    }
    Object.defineProperty(MobHostil.prototype, "dano", {
        get: function () {
            return this._dano;
        },
        set: function (novoDano) {
            this._dano = novoDano;
        },
        enumerable: false,
        configurable: true
    });
    MobHostil.prototype.atacar = function () {
        return "O mob " + this.nome + " fez um ataque e infligiu " + this._dano + " de dano!";
    };
    MobHostil.prototype.toString = function () {
        return _super.prototype.toString.call(this) +
            '\n\t"dano" : "' + this._dano + '"';
    };
    return MobHostil;
}(Mob_1.Mob));
exports.MobHostil = MobHostil;
