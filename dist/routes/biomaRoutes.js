"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
<<<<<<< HEAD
router.get('/', biomaController_1.BiomaController.listar);
router.get('/:id', biomaController_1.BiomaController.mostrar);
router.post('/', biomaController_1.BiomaController.inserir);
//router.put('/:id',   BiomaController.atualizar);
router.delete('/:id', biomaController_1.BiomaController.deletar);
=======
/*
router.get('/',      BiomaController.listar);
router.get('/:id',   BiomaController.mostrar);
router.post('/',     BiomaController.inserir);
router.put('/:id',   BiomaController.atualizar);
router.delete('/:id', BiomaController.deletar);
*/
>>>>>>> daniel
exports.default = router;
//# sourceMappingURL=biomaRoutes.js.map