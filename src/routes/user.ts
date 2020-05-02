import { Router } from 'express';
import UserService from '../services/UserService';
import Container from 'typedi';
import logger from '../utils/logger';

const router = Router();

router.post('/', async (req, res, next) => {
  try {
    const userDTO = req.body;

    const userServiceInstance = Container.get(UserService);
    const { id, nickname, createdAt, updatedAt } = await userServiceInstance.createUser(userDTO);

    return res.status(201).json({ id, nickname, createdAt, updatedAt });
  } catch (error) {
    logger.error(error);
    return next(error);
  }
});

export default router;
