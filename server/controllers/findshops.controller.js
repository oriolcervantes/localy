const db = require("../models/index");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const findShopsByKeyword = async (req, res) => {
  try {
    let { keyword } = req.body;
    const shops = await db.Shop.findAll({
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

module.exports = { findShopsByKeyword }