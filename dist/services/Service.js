"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
const consumoAPI_1 = require("../models/consumoAPI");
const Repository_1 = require("../repositories/Repository");
class Service {
    static async inserirMob() {
        const response = await consumoAPI_1.consumoAPI.consultaMob("");
        for (const mob of response.data) {
            const idMob = await Repository_1.Repository.inserirMob(mob.id_bioma, mob.nome, mob.vida, mob.tipo);
            if (mob.tipo == "hostile") {
                await Repository_1.Repository.inserirHostil(idMob, mob.dano);
            }
            else if (mob.tipo == "passive") {
                await Repository_1.Repository.inserirPassivo(idMob);
            }
        }
    }
}
exports.Service = Service;
//# sourceMappingURL=Service.js.map