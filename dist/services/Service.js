"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobService = void 0;
const consumoAPI_1 = require("../models/consumoAPI");
const Repository_1 = require("../repositories/Repository");
class MobService {
    static async inserirMob() {
        const response = await consumoAPI_1.consumoAPI.consultaMob("");
        for (const mob of response.data) {
            await Repository_1.Repository.inserirMob(mob.id_bioma, mob.name, mob.life, mob.type);
            if (mob.tipo == "hostile") {
                await Repository_1.Repository.inserirMobHostil(mob.idMob, mob.dano);
            }
            else if (mob.tipo == "passive") {
                await Repository_1.Repository.inserirMobPassivo(mob.idMob);
            }
        }
    }
    static async inserirBiomasAPI() {
        console.log("Entrou no Service");
        const response = await consumoAPI_1.consumoAPI.consultaBioma("");
        //console.log(response);
        for (const bioma of response.data) {
            console.log(bioma.name);
            await Repository_1.Repository.inserirBioma(bioma.name, bioma.dimension, bioma.category);
        }
    }
    static async inserirBioma(nome, dimensao, categoria) {
        console.log("Entrou no Service");
        const resposta = await Repository_1.Repository.inserirBioma(nome, dimensao, categoria);
    }
    static async deletarMob(nomeBioma) {
        console.log("Entrou no Service");
        const resposta = await Repository_1.Repository.deletarMob(nomeBioma);
        return resposta;
    }
    static async deletarBioma(nomeBioma) {
        console.log("Entrou no Service");
        const resposta = await Repository_1.Repository.deletarBioma(nomeBioma);
    }
    static async atualizarMob(nomeBioma, coluna, valor) {
        console.log("Entrou no Service");
        const resposta = await Repository_1.Repository.atualizarMob(nomeBioma, coluna, valor);
        return resposta;
    }
    static async atualizarBioma(nomeBioma, coluna, valor) {
        console.log("Entrou no Service");
        const resposta = await Repository_1.Repository.atualizarBioma(nomeBioma, coluna, valor);
    }
    static async selecionarMob(nomeBioma) {
        console.log("Entrou no Service");
        const resposta = await Repository_1.Repository.selecionarMob(nomeBioma);
        return resposta;
    }
    static async selecionarBioma(nomeBioma) {
        console.log("Entrou no Service");
        const resposta = await Repository_1.Repository.selecionarBioma(nomeBioma);
        return resposta;
    }
    static async selecionarTodosBiomas() {
        console.log("Entrou no Service");
        const resposta = await Repository_1.Repository.selecionarTodosBiomas();
    }
    static async selecionarTodosMobs() {
        console.log("Entrou no Service");
        const resposta = await Repository_1.Repository.selecionarTodosMobs();
        return resposta;
    }
}
exports.MobService = MobService;
//# sourceMappingURL=Service.js.map