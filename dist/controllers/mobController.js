"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobController = void 0;
const Service_1 = require("../services/Service");
class MobController {
    static async carregarMobs() {
        await Service_1.Service.carregarMobs();
    }
    static listar() {
        console.log("Mob Controller: Listando mobs");
    }
    static mostrar() {
        console.log("Mob Controller: mostrando mob");
    }
    static inserir() {
        console.log("Mob Controller: inserindo mob");
    }
    static atualizar() {
        console.log("Mob Controller: atualizando mob");
    }
    static deletar() {
        console.log("Mob Controller: deletando mob");
    }
}
exports.MobController = MobController;
//# sourceMappingURL=mobController.js.map