"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobController = void 0;
const MobService_1 = require("../services/MobService");
class MobController {
    static async inserir(req, res) {
        try {
            await MobService_1.MobService.inserirMob();
            res.status(201).json({
                mensagem: "Mobs importados com sucesso!"
            });
        }
        catch (error) {
            res.status(500).json({
                erro: error.message
            });
        }
    }
}
exports.MobController = MobController;
//# sourceMappingURL=mobController.js.map