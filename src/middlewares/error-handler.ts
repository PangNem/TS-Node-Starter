import { Request, Response, NextFunction } from 'express';

interface Err extends Error {
  status: number;
  data?: any;
}

export function forwardHandler (req: Request, res: Response, next: NextFunction) {
  let err = new Error('Not Found') as Err;
  err.status = 404;
  next(err);
}

export function errorHandler (err: Err, req: Request, res: Response, next: NextFunction) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    status: err.status,
    data: err.data
  });
}
