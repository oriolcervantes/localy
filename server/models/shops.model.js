module.exports = (sequelize, DataTypes) => {

  const Shop = sequelize.define("Shop", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    coordenates: DataTypes.STRING,
    products: DataTypes.STRING,
    address: DataTypes.STRING,
    telephone: DataTypes.BIGINT,
    website: DataTypes.STRING,
  })

  return Shop;

};