import { consumoAPI } from "../models/consumoAPI";
import { Repository } from "../repositories/Repository";

export class Service {

    static async inserirMobsAPI(): Promise<void> {

        console.log("Entrou no Service");
        const response = await consumoAPI.consultaMob("");

        for (const mob of response.data) {
            await Repository.inserirMob(
                mob.id_bioma,
                mob.name,
                mob.life,
                mob.type
            );

            if (mob.tipo == "hostile") {

                await Repository.inserirMobHostil(
                    mob.idMob,
                    mob.dano
                );

            } else if (mob.tipo == "passive") {

                await Repository.inserirMobPassivo(
                    mob.idMob
                );

            }

        }
    }



    static async inserirBiomasAPI(): Promise<void> {

        console.log("Entrou no Service");

        const response = await consumoAPI.consultaBioma("");

        //console.log(response);

        for (const bioma of response.data) {

            console.log(bioma.name);

            await Repository.inserirBioma(
                bioma.name,
                bioma.dimension,
                bioma.category
            );
        }
    }

    static async inserirBioma(nome: string, dimensao: string, categoria: string): Promise<number> {

        console.log("Entrou no Service");

        const resposta = await Repository.inserirBioma(
            nome,
            dimensao,
            categoria
        );

    }


    static async deletarMob(nomeBioma: string): Promise<boolean> {
        console.log("Entrou no Service");
        const resposta = await Repository.deletarMob(nomeBioma);

        return resposta;
    }

    static async deletarBioma(nomeBioma: string): Promise<boolean> {

        console.log("Entrou no Service");

        const resposta = await Repository.deletarBioma(nomeBioma);
    }


    static async atualizarMob(nomeBioma: string, coluna: string, valor: string): Promise<any> {
        console.log("Entrou no Service");
        const resposta = await Repository.atualizarMob(nomeBioma, coluna, valor);

        return resposta;
    }


    static async atualizarBioma(nomeBioma: string, coluna: string, valor: string): Promise<any> {

        console.log("Entrou no Service");

        const resposta = await Repository.atualizarBioma(nomeBioma, coluna, valor);
    }


    static async selecionarMob(nomeBioma: string): Promise<any> {
        console.log("Entrou no Service");
        const resposta = await Repository.selecionarMob(nomeBioma);
        return resposta;
    }


    static async selecionarBioma(nomeBioma: string): Promise<any> {

        console.log("Entrou no Service");

        const resposta = await Repository.selecionarBioma(nomeBioma);

        return resposta;
    }

    static async selecionarTodosBiomas(): Promise<any> {

        console.log("Entrou no Service");

        const resposta = await Repository.selecionarTodosBiomas();
    }


    static async selecionarTodosMobs(): Promise<any[]> {
        console.log("Entrou no Service");
        const resposta = await Repository.selecionarTodosMobs();


        return resposta;
    }
}