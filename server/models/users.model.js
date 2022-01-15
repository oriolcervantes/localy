const { Model, DataTypes } = require("sequelize");
const sequelize = require('.');

class User extends Model { }

User.init({
  // id: {
  //   type: DataTypes.INTEGER,
  //   primaryKey: true,
  //   autoIncrement: true
  // },
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
}, { sequelize })



module.exports = User;