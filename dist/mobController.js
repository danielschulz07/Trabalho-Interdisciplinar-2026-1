"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobController = void 0;
const Service_1 = require("./Service");
class MobController {
    static async carregarMobs() {
        await Service_1.Service.carregarMobs();
    }
}
exports.MobController = MobController;
//# sourceMappingURL=mobController.js.map