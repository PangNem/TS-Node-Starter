import { Request, Response, NextFunction } from 'express';

interface Err extends Error {
  status: number;
  message: string;
  data?: any;
}

export function forwardHandler (req: Request, res: Response, next: NextFunction) {
  let err = new Error('Not Found') as Err;
  err.status = 404;
  next(err);
}

export function errorHandler (error: Err, req: Request, res: Response, next: NextFunction) {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong';
  res.status(status).send({
    status,
    message
  });
}
