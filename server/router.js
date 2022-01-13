const express = require("express");
const router = express.Router();
const controller = require("./controllers/findshops.controller");

router.get("/filteredshops", controller.findShopsByKeyword);

module.exports = router;