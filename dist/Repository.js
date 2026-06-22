"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
class Repository {
    static vetBiomas = [];
    static salvarTodos(biomas) {
        this.vetBiomas.push(...biomas);
    }
    static listar() {
        return this.vetBiomas;
    }
}
exports.Repository = Repository;
//# sourceMappingURL=Repository.js.map