"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const consumoAPI_1 = require("./consumoAPI");
async function main() {
    const mob = await consumoAPI_1.consumoAPI.consultaMob("zomb");
    console.log(mob);
    const bioma = await consumoAPI_1.consumoAPI.consultaBioma("desert");
    console.log(bioma);
}
main();
//# sourceMappingURL=index.js.map