import { Request, Response } from 'express';
import User from '../models/User';

export const create = async (req: Request, res: Response) => {
  const nickname = req.body.nickname;

  const user = await User.create({
    nickname
  });

  return res.status(201).json(user);
};
