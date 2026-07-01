"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const biomaController_1 = require("../controllers/biomaController");
const router = (0, express_1.Router)();
router.get('/', biomaController_1.BiomaController.getBiomas);
router.get('/:nome', biomaController_1.BiomaController.getBioma);
router.get('/insert', biomaController_1.BiomaController.insertBioma);
//router.put('/:id',   BiomaController.atualizar);
//router.delete('/:id', BiomaController.deletar);
exports.default = router;
//# sourceMappingURL=biomaRoutes.js.map