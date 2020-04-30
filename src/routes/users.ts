import { Router } from 'express';
import * as users from '../controllers/users';

const router = Router();

router.post('/', users.create);

export default router;
