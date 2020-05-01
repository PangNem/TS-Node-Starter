import { Request, Response, NextFunction } from 'express';
import UserService from '../services/UserService';
import Container from 'typedi';
import logger from '../utils/logger';

export const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userDTO = req.body;

    const userServiceInstance = Container.get(UserService);
    const { id, nickname, createdAt, updatedAt } = await userServiceInstance.createUser(userDTO);

    return res.status(201).json({ id, nickname, createdAt, updatedAt });
  } catch (error) {
    logger.error(error);
    return next(error);
  }
};
