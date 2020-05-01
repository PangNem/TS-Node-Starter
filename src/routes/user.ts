import { Router } from 'express';
import * as user from '../controllers/user';

const router = Router();

router.post('/', user.create);

export default router;
