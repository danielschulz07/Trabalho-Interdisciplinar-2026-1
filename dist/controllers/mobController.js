"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobController = void 0;
const Service_1 = require("../services/Service");
class MobController {
    static async inserir(req, res) {
        try {
            console.log("to aqui");
            await Service_1.Service.inserirMob();
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