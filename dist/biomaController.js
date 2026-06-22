"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BiomaController = void 0;
const Service_1 = require("./Service");
class BiomaController {
    static async carregarBiomas() {
        await Service_1.Service.carregarBiomas();
    }
}
exports.BiomaController = BiomaController;
//# sourceMappingURL=biomaController.js.map