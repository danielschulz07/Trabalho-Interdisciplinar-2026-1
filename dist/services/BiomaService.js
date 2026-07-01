"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BiomaService = void 0;
const BiomaRepository_1 = __importDefault(require("../repositories/BiomaRepository"));
class BiomaService {
    static async getBiomas() {
        const biomas = BiomaRepository_1.default.findAll();
        return biomas;
    }
    static async getBioma(nome) {
        const bioma = BiomaRepository_1.default.selectBioma(nome);
        return bioma;
    }
}
exports.BiomaService = BiomaService;
//# sourceMappingURL=BiomaService.js.map