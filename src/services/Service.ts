import { consumoAPI } from "../models/consumoAPI";
import { Repository } from "../repositories/Repository";

export class Service {

    static async inserirMob(): Promise<void> {

        const response = await consumoAPI.consultaMob("");

        for (const mob of response.data) {
            const idMob = await Repository.inserirMob(mob.id_bioma, mob.nome, mob.vida, mob.tipo);

            if (mob.tipo == "hostile") {
                await Repository.inserirHostil(
                    idMob,
                    mob.dano
                );

            } else if (mob.tipo == "passive"){
                await Repository.inserirPassivo(
                    idMob
                );
            }
        }
    }




    

}