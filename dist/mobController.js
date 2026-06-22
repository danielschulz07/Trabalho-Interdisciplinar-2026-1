"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobController = void 0;
const Mob_1 = require("./Mob");
class MobController {
    static criaMobs(dadosMob) {
        const vetMobs = [];
        dadosMob.data.forEach((mob) => {
            vetMobs.push(new Mob_1.Mob(mob.name, mob.type, mob.hp, mob.behavior));
        });
        return vetMobs;
    }
}
exports.MobController = MobController;
//# sourceMappingURL=mobController.js.map