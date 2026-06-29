"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mobController_1 = require("../controllers/mobController");
const router = (0, express_1.Router)();
//router.get('/',      MobController.listar);
//router.get('/:id',   MobController.mostrar);
router.post('/', mobController_1.MobController.inserir);
//router.put('/:id',   MobController.atualizar);
//router.delete('/:id', MobController.deletar);
exports.default = router;
//# sourceMappingURL=mobRoutes.js.map