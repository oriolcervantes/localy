const Sequelize = require("sequelize");


module.exports = (sequelize, DataTypes) => {

  const Shop = sequelize.define("Shop", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: DataTypes.STRING,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
    products: DataTypes.ARRAY(Sequelize.TEXT),
    address: DataTypes.STRING,
    telephone: DataTypes.BIGINT,
    website: DataTypes.STRING,
  })

  return Shop;

};