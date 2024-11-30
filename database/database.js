
const { Sequelize } = require('sequelize');
const User = require('./user');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.POSTGRES_DATABASE,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    dialect: 'postgresql',
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection established successfully');
  })
  .catch((err) => {
    console.error('Error establishing connection:', err);
  });

sequelize
  .sync()
  .then(() => {
    console.log('Database synced successfully');
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });

module.exports = sequelize;