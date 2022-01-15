const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('.');
const User = require('./users.model');

class Shop extends Model { }

Shop.init({
  // id: {
  //   type: DataTypes.INTEGER,
  //   primaryKey: true
  // },
  name: DataTypes.STRING,
  latitude: DataTypes.FLOAT,
  longitude: DataTypes.FLOAT,
  products: DataTypes.ARRAY(Sequelize.TEXT),
  address: DataTypes.STRING,
  telephone: DataTypes.BIGINT,
  website: DataTypes.STRING,
  picture: DataTypes.STRING,
}, { sequelize })

Shop.belongsTo(User);
User.hasMany(Shop);

module.exports = Shop;