import { consumoAPI } from "../models/consumoAPI";
import { Repository } from "../repositories/Repository";

export class Service {

    static async inserirMobsAPI(): Promise<void> {

        console.log("Entrou no Service");
        const response = await consumoAPI.consultaMob("");

        for (const mob of response.data) {
            await Repository.inserirMob(
                mob.name,
                mob.dimension,
                mob.category,
                mob.type
            );
        }
    }

    static async deletarMob(nomeBioma: string): Promise<boolean> {
        console.log("Entrou no Service");
        const resposta = await Repository.deletarMob(nomeBioma);

        return resposta;
    }

    static async atualizarMob(nomeBioma: string, coluna: string, valor: string): Promise<any> {
        console.log("Entrou no Service");
        const resposta = await Repository.atualizarMob(nomeBioma, coluna, valor);

        return resposta;
    }

    static async selecionarMob(nomeBioma: string): Promise<any> {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
        console.log("Entrou no Service");
        const resposta = await Repository.selecionarMob(nomeBioma);

        return resposta;
    }

    static async selecionarTodosMobs(): Promise<any[]> {
        console.log("Entrou no Service");
        const resposta = await Repository.selecionarTodosMobs();

        return resposta;
    }
}