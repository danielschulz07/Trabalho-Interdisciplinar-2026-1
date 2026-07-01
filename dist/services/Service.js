"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
const consumoAPI_1 = require("../models/consumoAPI");
const Repository_1 = require("../repositories/Repository");
class Service {
    static async inserirMobsAPI() {
        console.log("Entrou no Service");
        const response = await consumoAPI_1.consumoAPI.consultaMob("");
        for (const mob of response.data) {
            await Repository_1.Repository.inserirMob(mob.name, mob.dimension, mob.category, mob.type);
        }
    }
    static async deletarMob(nomeBioma) {
        console.log("Entrou no Service");
        const resposta = await Repository_1.Repository.deletarMob(nomeBioma);
        return resposta;
    }
    static async atualizarMob(nomeBioma, coluna, valor) {
        console.log("Entrou no Service");
        const resposta = await Repository_1.Repository.atualizarMob(nomeBioma, coluna, valor);
        return resposta;
    }
    static async selecionarMob(nomeBioma) {
        console.log("Entrou no Service");
        const resposta = await Repository_1.Repository.selecionarMob(nomeBioma);
        return resposta;
    }
    static async selecionarTodosMobs() {
        console.log("Entrou no Service");
        const resposta = await Repository_1.Repository.selecionarTodosMobs();
        return resposta;
    }
}
exports.Service = Service;
//# sourceMappingURL=Service.js.map