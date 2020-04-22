import app from './app';
import { errorHandler } from './middlewares/error-handler';

const host: string = app.get('host');
const port: number = app.get('port');

app.use(errorHandler);

app.listen(port, () => {
  console.log(`✅ Server is: http://${host}:${port}`);
});
