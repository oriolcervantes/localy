const express = require("express");
const router = express.Router();
const controller = require("./controllers/findshops.controller");

router.post("/filteredshops", controller.findShopsByKeyword);

module.exports = router;