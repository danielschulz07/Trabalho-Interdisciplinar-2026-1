import { Bioma } from "./Bioma";
import { Mob } from "./Mob";

export class Repository {

    private static vetBiomas: Array<Bioma> = [];
    private static vetMobs: Array<Mob> = [];

    static salvarBiomas(biomas: Array<Bioma>): void {
        this.vetBiomas.push(...biomas);
    }

    static listarBiomas(): Array<Bioma> {
        return this.vetBiomas;
    }

    static salvarMobs(mobs: Array<Mob>): void {
        this.vetMobs.push(...mobs);
    }

    static listarMobs(): Array<Mob>{
        return this.vetMobs;
    }


}