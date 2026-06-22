"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const biomaController_1 = require("./biomaController");
async function main() {
    await biomaController_1.BiomaController.carregarBiomas();
    //await Service.carregaMobs();
    //console.log(Service.listarMobs())
}
main();
//# sourceMappingURL=index.js.map