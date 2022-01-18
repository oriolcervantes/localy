const Shop = require("../models/shops.model");

const createShop = async (req, res) => {
  try {
    const { products } = req.body;
    const prodArr = products.split(",");
    const shop = await Shop.create({ ...req.body, products: prodArr })
    res.status(200).send(shop);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: "400", message: "Could not create shop" });
  }
}

const addImageToShop = async (req, res) => {
  try {
    const newPicture = req.body.picture;
    const shopId = req.body.shopId;
    const shop = Shop.findOne({
      where: { id: shopId }
    }).then(shop => {
      shop.sequelize.query(
        `UPDATE "Shops" SET picture='{${[
          shop.picture,
          newPicture
        ]}}'WHERE id=${shopId}`
      );
    });

    res.status(200).send(shop);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: "400", message: "Could not create shop" });
  }
}

const addProductsToShop = async (req, res) => {
  try {
    const { products } = req.body;
    const newProdArr = products.split(",");
    const shopId = req.body.shopId;
    const shop = Shop.findOne({
      where: { id: shopId }
    }).then(shop => {
      shop.sequelize.query(
        `UPDATE "Shops" SET products='{${[
          shop.products,
          ...newProdArr
        ]}}'WHERE id=${shopId}`
      );
    });

    res.status(200).send(shop);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: "400", message: "Could not create shop" });
  }
}

const removeProduct = async (req, res) => {
  try {
    const productToDelete = req.body.product;
    const shopId = req.body.shopId;
    const shop = Shop.findOne({
      where: { id: shopId }
    }).then(shop => {
      shop.sequelize.query(
        `UPDATE "Shops" SET products='{${[
          shop.products.filter(product => product !== productToDelete)
        ]}}'WHERE id=${shopId}`
      );
    });

    res.status(200).send(shop);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: "400", message: "Could not create shop" });
  }
}

module.exports = { createShop, addImageToShop, addProductsToShop, removeProduct }