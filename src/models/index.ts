import { Sequelize } from 'sequelize-typescript';
import { User } from './User';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db.sqlite',
  logging: false
});

sequelize.addModels([User]);

export { sequelize, Sequelize };
