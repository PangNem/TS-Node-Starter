import * as express from 'express';
const app = express();

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello World!');
});

interface Err extends Error {
  status: number;
  data?: any;
}

// 404 에러 후 다음 에러 핸들러
app.use(function (req: express.Request, res: express.Response, next: express.NextFunction) {
  let err = new Error('Not Found') as Err;
  err.status = 404;
  next(err);
});

// 에러 핸들러
app.use(function (err: Err, req: express.Request, res: express.Response, next: express.NextFunction) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    data: err.data
  });
});

export default app;
