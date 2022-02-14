const { Sequelize } = require('sequelize');
require('dotenv').config();

const USER = process.env.DATABASE_USER;
const NAME = process.env.DATABASE_NAME;
const PASSWORD = process.env.DATABASE_PASSWORD;

const config = {
  host: "localhost",
  dialect: "postgres",
  port: 5432
}

const sequelize = new Sequelize(NAME, USER, PASSWORD, config);


module.exports = sequelize;