"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const biomaController_1 = require("../controllers/biomaController");
const router = (0, express_1.Router)();
router.get('/', biomaController_1.BiomaController.listar);
router.get('/:id', biomaController_1.BiomaController.mostrar);
router.post('/', biomaController_1.BiomaController.inserir);
//router.put('/:id',   BiomaController.atualizar);
router.delete('/:id', biomaController_1.BiomaController.deletar);
exports.default = router;
//# sourceMappingURL=biomaRoutes.js.map