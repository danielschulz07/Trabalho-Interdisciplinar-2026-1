"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
//router.get('/',      MobController.listar);
//router.get('/:id',   MobController.mostrar);
//router.post('/',     MobController.inserir);
//router.put('/:id',   MobController.atualizar);
router.delete('/:id', mobController_1.MobController.deletar);
exports.default = router;
//# sourceMappingURL=mobRoutes.js.map