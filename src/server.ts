import * as http from 'http';
import app from './app';
import { sequelize } from './models/sequelize';
import { Sequelize } from 'sequelize/types';

const stopServer = async (
  server: http.Server,
  sequelize: Sequelize
) => {
  console.log(`Stopping Server...`);

  server.close();
  await sequelize.close();
  process.exit();
};

async function startServer () {
  const HOST: string = app.get('host');
  const PORT: number = app.get('port');

  const server = app.listen(PORT, () => {
    console.log(`✅ Server is: http://${HOST}:${PORT}`);
  });

  try {
    await sequelize.authenticate();
    await sequelize.sync({
      force: false
    });

  } catch (e) {
    await stopServer(server, sequelize);

    throw e;
  }

}

startServer()
  .then(() => {
    console.log('Run Succesfully');
  })
  .catch((ex: Error) => {
    console.log('Unable Run:', ex);
  });
