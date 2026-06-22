"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
const consumoAPI_1 = require("./consumoAPI");
const Bioma_1 = require("./Bioma");
const Repository_1 = require("./Repository");
class Service {
    static async carregarBiomas() {
        const dados = await consumoAPI_1.consumoAPI.consultaBioma("");
        const vetBiomas = [];
        dados.data.forEach((bioma) => {
            vetBiomas.push(new Bioma_1.Bioma(bioma.name, bioma.dimension, bioma.category));
        });
        Repository_1.Repository.salvarTodos(vetBiomas);
    }
}
exports.Service = Service;
//# sourceMappingURL=Service.js.map