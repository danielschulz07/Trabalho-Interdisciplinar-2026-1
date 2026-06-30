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
        return resposta;
    }
}
exports.Service = Service;
//# sourceMappingURL=Service.js.map