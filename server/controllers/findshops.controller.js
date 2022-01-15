const Shop = require("../models/shops.model");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const findShopsByKeyword = async (req, res) => {
  try {
    let { keyword } = req.body;
    const shops = await Shop.findAll({
      where: {
        products: {
          [Op.contains]: [`${keyword}`]
        }
      }
    });
    res.status(200).send(shops);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

const findShopsByUserId = async (req, res) => {
  try {
    let { UserId } = req.body;
    const shops = await Shop.findAll({
      where: {
        UserId: UserId
      }
    });
    res.status(200).send(shops);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

module.exports = { findShopsByKeyword, findShopsByUserId }