const Sequelize = require("sequelize");

const config = {
  host: "localhost",
  dialect: "postgres",
  port: 5432
}

const sequelize = new Sequelize("localydb", "postgres", "codecloudnine", config);
const db = {};

const model = require("./shops.model")(sequelize, Sequelize.DataTypes);
db[model.name] = model;

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;