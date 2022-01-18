const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('.');
const User = require('./users.model');

class Shop extends Model { }

Shop.init({
  name: DataTypes.STRING,
  category: DataTypes.STRING,
  address: DataTypes.STRING,
  telephone: DataTypes.BIGINT,
  email: DataTypes.STRING,
  website: DataTypes.STRING,
  description: DataTypes.STRING,
  latitude: DataTypes.FLOAT,
  longitude: DataTypes.FLOAT,
  products: DataTypes.ARRAY(Sequelize.TEXT),
  picture: DataTypes.ARRAY(Sequelize.TEXT),
}, { sequelize })

Shop.belongsTo(User);
User.hasMany(Shop);

module.exports = Shop;