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
            await Repository_1.Repository.inserirMob(mob.id_bioma, mob.name, mob.life, mob.type);
        }
    }
<<<<<<< HEAD
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
        return resposta;
    }
    static async deletarBioma(nomeBioma) {
        console.log("Entrou no Service");
        const resposta = await Repository_1.Repository.deletarBioma(nomeBioma);
        return resposta;
    }
    static async atualizarBioma(nomeBioma, coluna, valor) {
        console.log("Entrou no Service");
        const resposta = await Repository_1.Repository.atualizarBioma(nomeBioma, coluna, valor);
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
=======
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
>>>>>>> daniel
        return resposta;
    }
}
exports.Service = Service;
//# sourceMappingURL=Service.js.map