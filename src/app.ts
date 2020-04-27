import * as express from 'express';
import { forwardHandler, errorHandler } from './middlewares/error-handler';

const app = express();
const prod: boolean = process.env.NODE_ENV === 'production';

app.set('host', 'localhost');
app.set('port', prod ? process.env.PORT : 3000);

app.use('/', require('./routes/echo'));

app.get('/', (req, res, next) => {
  res.send('Hello World!');
});

app.use(forwardHandler);
app.use(errorHandler);

export default app;
