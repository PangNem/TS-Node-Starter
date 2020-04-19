import * as express from 'express';
const app = express();

app.set('port', process.env.PORT || 3000);
app.set('host', 'localhost');

app.use('/', require('./routes/echo'));

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello World!');
});

export default app;
