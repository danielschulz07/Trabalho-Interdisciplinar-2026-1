"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
const consumoAPI_1 = require("../models/consumoAPI");
const Bioma_1 = require("../models/Bioma");
const Repository_1 = require("../repositories/Repository");
const MobPassivo_1 = require("../models/MobPassivo");
const MobHostil_1 = require("../models/MobHostil");
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
            if (mobs.type == "passive") {
                vetMobs.push(new MobPassivo_1.MobPassivo(mobs.name, mobs.type, mobs.hp, mobs.behavior));
            }
            else if (mobs.type == "hostile") {
                vetMobs.push(new MobHostil_1.MobHostil(mobs.name, mobs.type, mobs.hp, mobs.behavior, mobs.damage.normal));
            }
        });
        Repository_1.Repository.salvarMobs(vetMobs);
    }
}
exports.Service = Service;
//# sourceMappingURL=Service.js.map