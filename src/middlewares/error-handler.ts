import { Request, Response, NextFunction } from 'express';

interface Err extends Error {
  status: number;
  data?: any;
}

export function errorHandler (err: Err, req: Request, res: Response, next: NextFunction) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    data: err.data
  });
}
