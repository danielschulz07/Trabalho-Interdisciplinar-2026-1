"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobController = void 0;
const MobService_1 = require("../services/MobService");
class MobController {
    _vetMobs = [];
    static async inserir(req, res) {
        console.log("ESTOU NO CONTROLLER NOVO");
        try {
            await MobService_1.MobService.inserirMob();
            res.status(201).json({
                mensagem: "Mobs importados com sucesso!"
            });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({
                erro: error.message
            });
        }
    }
    static async listar() {
        try {
            const response = await Service_1.Service.selecionarTodosMobs();
            return response;
        }
        catch (e) {
            return "Erro ao tentar listar dados: " + e.message;
        }
    }
    static async mostrar(mob) {
        try {
            console.log("Mob Controller: mostrando mob");
            const response = await Service_1.Service.selecionarMob(mob.nome);
            return response;
        }
        catch (e) {
            return e;
        }
    }
    static async atualizar(nomeMob, coluna, valor) {
        try {
            console.log("Mob Controller: atualizando mob");
            const response = await Service_1.Service.atualizarMob(nomeMob, coluna, valor);
            if (response == null) {
                throw new Error("Não foi possível atualizar o mob.");
            }
            return response;
        }
        catch (e) {
            return e.message;
        }
    }
    static async deletar(nomeMob) {
        try {
            console.log("Mob Controller: deletando mob");
            const response = await Service_1.Service.deletarMob(nomeMob);
            if (!response) {
                throw new Error("Não foi possível deletar o mob.");
            }
            return response;
        }
        catch (e) {
            return e.message;
        }
    }
    pesquisarPorCriterio(criterio) {
        return this._vetMobs.filter(b => b.atendeCriterio(criterio));
    }
}
exports.MobController = MobController;
//# sourceMappingURL=mobController.js.map