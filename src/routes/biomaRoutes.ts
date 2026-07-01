import { Router } from 'express';
import { BiomaController } from '../controllers/biomaController';

const router = Router();

router.get('/insert',     BiomaController.insertBioma);
router.get('/',      BiomaController.getBiomas);
router.get('/:nome',   BiomaController.getBioma);
//router.put('/:id',   BiomaController.atualizar);
//router.delete('/:id', BiomaController.deletar);

export default router;