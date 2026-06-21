"use strict";
<<<<<<< HEAD
=======
Object.defineProperty(exports, "__esModule", { value: true });
//import { IPesquisavel } from "./IPesquisavel";
const consumoAPI_1 = require("./consumoAPI");
async function main() {
    const mob = await consumoAPI_1.consumoAPI.consultaMob("zomb");
    console.log(mob);
    const bioma = await consumoAPI_1.consumoAPI.consultaBioma("desert");
    console.log(bioma);
}
main();
>>>>>>> main
//# sourceMappingURL=index.js.map