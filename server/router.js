const express = require("express");
const router = express.Router();
const findController = require("./controllers/findshops.controller");
const controller = require("./controllers/findshops.controller");

router.post("/filteredshops", findController.findShopsByKeyword);

module.exports = router;