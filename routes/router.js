const express = require("express");
const router = express.Router();

let home = require("../controllers/home");

router.get("/", home.getHome);

module.exports = router;