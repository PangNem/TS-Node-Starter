import * as express from 'express';
const app = express();

app.set('host', 'localhost');
app.set('port', process.env.PORT || 3000);

app.use('/', require('./routes/echo'));

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello World!');
});

export default app;
