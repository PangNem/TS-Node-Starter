import app from './app';
import { errorHandler } from './middlewares/error-handler';

const port: number = app.get('port');
const host: string = app.get('host');

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is: http://${host}:${port}`);
});
