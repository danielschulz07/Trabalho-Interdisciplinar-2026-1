"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
const consumoAPI_1 = require("./consumoAPI");
const Bioma_1 = require("./Bioma");
const Repository_1 = require("./Repository");
const Mob_1 = require("./Mob");
class Service {
    static async carregarBiomas() {
        const vetBiomas = [];
        const dados = await consumoAPI_1.consumoAPI.consultaBioma("");
        dados.data.forEach((bioma) => {
            vetBiomas.push(new Bioma_1.Bioma(bioma.name, bioma.dimension, bioma.category));
        });
        Repository_1.Repository.salvarBiomas(vetBiomas);
    }
    static async carregarMobs() {
        const vetMobs = [];
        const dados = await consumoAPI_1.consumoAPI.consultaMob("");
        dados.data.forEach((mobs) => {
            vetMobs.push(new Mob_1.Mob(mobs.name, mobs.type, mobs.hp, mobs.behavior));
        });
        Repository_1.Repository.salvarMobs(vetMobs);
    }
}
exports.Service = Service;
//# sourceMappingURL=Service.js.map