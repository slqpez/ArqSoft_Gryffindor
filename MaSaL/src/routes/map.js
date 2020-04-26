const express = require("express");
const router = express.Router();
const pool = require("../database.js");
const path = require("path");
const { isLoggedIn } = require("../lib/auth.js");

router.get("/map", isLoggedIn, (req, res) => {
  res.render("maps/mapForAdmin.hbs");
});

module.exports = router;
