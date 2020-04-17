import { Request, Response } from 'express';

export function echo (req: Request, res: Response) {
  return res.json(req.query);
}
