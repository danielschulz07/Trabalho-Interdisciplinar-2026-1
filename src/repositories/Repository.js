"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
var Repository = /** @class */ (function () {
    function Repository() {
    }
    Repository.salvarBiomas = function (biomas) {
        var _a;
        (_a = this.vetBiomas).push.apply(_a, biomas);
    };
    Repository.listarBiomas = function () {
        return this.vetBiomas;
    };
    Repository.salvarMobs = function (mobs) {
        var _a;
        (_a = this.vetMobs).push.apply(_a, mobs);
    };
    Repository.listarMobs = function () {
        return this.vetMobs;
    };
    Repository.vetBiomas = [];
    Repository.vetMobs = [];
    return Repository;
}());
exports.Repository = Repository;
