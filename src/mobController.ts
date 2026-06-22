import { Mob } from "./Mob";

export abstract class MobController {

    static criaMobs(dadosMob: any): Array<Mob> {
        const vetMobs: Array<Mob> = [];
        
        dadosMob.data.forEach((mob: any) => {
            vetMobs.push(new Mob(mob.name, mob.type, mob.hp, mob.behavior))
        });
        return vetMobs;
    }
}