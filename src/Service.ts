import { consumoAPI } from "./consumoAPI";
import { Bioma } from "./Bioma";
import { Repository } from "./Repository";
import { Mob } from "./Mob";

export class Service {
    static async carregarBiomas(): Promise<void> {

        const vetBiomas: Array<Bioma> = [];

        const dados = await consumoAPI.consultaBioma("");
        dados.data.forEach((bioma: any) => {
            vetBiomas.push(new Bioma(bioma.name, bioma.dimension, bioma.category));

        });
        Repository.salvarBiomas(vetBiomas);
    }

        static async carregarMobs(): Promise<void> {

        const vetMobs: Array<Mob> = [];

        const dados = await consumoAPI.consultaMob("");
        dados.data.forEach((mobs: any) => {
            vetMobs.push(new Mob(mobs.name, mobs.type, mobs.hp, mobs.behavior))
        });
        Repository.salvarMobs(vetMobs);
    }


}