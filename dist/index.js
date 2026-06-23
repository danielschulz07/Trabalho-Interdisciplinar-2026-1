"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mobController_1 = require("./mobController");
const Repository_1 = require("./Repository");
async function main() {
    //await BiomaController.carregarBiomas()
    //console.log(Repository.listarBiomas())
    await mobController_1.MobController.carregarMobs();
    console.log(Repository_1.Repository.listarMobs());
}
main();
//# sourceMappingURL=index.js.map