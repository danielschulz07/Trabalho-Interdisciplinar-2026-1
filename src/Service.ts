import { consumoAPI } from "./consumoAPI";
import { Bioma } from "./Bioma";
import { Repository } from "./Repository";
import { Mob } from "./Mob";
import { MobPassivo } from "./MobPassivo";
import { MobHostil } from "./MobHostil";

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
            if(mobs.type == "passive"){
                vetMobs.push(new MobPassivo(mobs.name, mobs.type, mobs.hp, mobs.behavior));
            }else if(mobs.type == "hostile"){
                vetMobs.push(new MobHostil(mobs.name, mobs.type, mobs.hp, mobs.behavior, mobs.damage.normal))
            }
            
        });
        Repository.salvarMobs(vetMobs);
    }


}