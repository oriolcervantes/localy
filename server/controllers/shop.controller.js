const Shop = require("../models/shops.model");

const createShop = async (req, res) => {
  try {
    console.log(req.body);
    const { products } = req.body;
    const prodArr = products.split(",");
    console.log(products);
    const shop = await Shop.create({ ...req.body, products: prodArr })
    res.status(200).send(shop);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: "400", message: "Could not create shop" });
  }
}


module.exports = { createShop }