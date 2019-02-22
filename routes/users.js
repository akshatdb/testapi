import { userView, userAdd } from '../controllers/usersController';

import { Router } from 'express';
var router = Router();

/* GET home page. */
router.get('/', userView);
router.post('/', userAdd);

export default router;
