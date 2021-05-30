import { Router } from 'express'

const router = Router();

import * as userCtr from '../controllers/user.controller'

router.get('/', userCtr.readAllUsuario);
router.get('/:id', userCtr.readUsuario);
router.delete('/:id', userCtr.deleteUsuario);
router.put('/:id', userCtr.updateUsuario);
router.post('/', userCtr.createUsuario);

export default router;