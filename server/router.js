const express = require("express");
const router = express.Router();
const findController = require("./controllers/findshops.controller");
const userController = require("./controllers/user.controller");
const shopController = require("./controllers/shop.controller");
const imageUploadController = require("./controllers/image.controller");
const authMiddleware = require("./middlewares/auth")

router.post("/filteredshops", findController.findShopsByKeyword);
router.post("/usershops", findController.findShopsByUserId);
router.post("/createshop", shopController.createShop);
router.post("/register", userController.create);
router.post("/login", userController.login);
router.get("/profile", authMiddleware, userController.profile);
router.post("/logout", authMiddleware, userController.logout);
router.post("/uploadimage", imageUploadController.upload);
router.post("/addimage", shopController.addImageToShop);
router.post("/addproducts", shopController.addProductsToShop);
router.post("/removeproduct", shopController.removeProduct);

module.exports = router;