"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
class Repository {
    static vetBiomas = [];
    static vetMobs = [];
    static salvarBiomas(biomas) {
        this.vetBiomas.push(...biomas);
    }
    static listarBiomas() {
        return this.vetBiomas;
    }
    static salvarMobs(mobs) {
        this.vetMobs.push(...mobs);
    }
    static listarMobs() {
        return this.vetMobs;
    }
}
exports.Repository = Repository;
//# sourceMappingURL=Repository.js.map