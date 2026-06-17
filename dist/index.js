"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const consumoAPI_1 = require("./consumoAPI");
async function main() {
    const mob = await consumoAPI_1.consumoAPI.consultaMob("zomb");
    console.log(mob);
}
main();
//# sourceMappingURL=index.js.map