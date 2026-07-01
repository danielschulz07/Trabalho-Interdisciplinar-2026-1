import { Router } from 'express';
import { BiomaController } from '../controllers/biomaController';

const router = Router();

router.get('/',      BiomaController.getBiomas);
//router.get('/:id',   BiomaController.mostrar);
//router.post('/',     BiomaController.inserir);
//router.put('/:id',   BiomaController.atualizar);
//router.delete('/:id', BiomaController.deletar);

export default router;