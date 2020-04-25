import app from './app';
import { errorHandler } from './middlewares/error-handler';
import { sequelize } from './models';

const host: string = app.get('host');
const port: number = app.get('port');

app.use(errorHandler);

sequelize.sync({ force: false })
  .then(() => {
    console.log('DB Connect Success!');
  })
  .catch((err: Error) => {
    console.error(err);
  });

app.listen(port, () => {
  console.log(`✅ Server is: http://${host}:${port}`);
});
