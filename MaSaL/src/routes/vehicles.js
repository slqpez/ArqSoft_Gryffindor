const express = require("express");
const router = express.Router();
const pool = require("../database.js");
const path = require("path");

router.get("/add", (req, res) => {
  res.render("vehicles/add.hbs");
});

router.post("/add", async (req, res) => {
  const { nameDriver, vehiclePlate, phone, description } = req.body;
  const newVehicle = {
    nameDriver,
    vehiclePlate,
    phone,
    description
  };
  await pool.query("INSERT INTO vehicles set ?", [newVehicle]);

  res.send("Recibido");
});

router.get("/", async (req, res) => {
  const vehicles = await pool.query("SELECT * FROM vehicles");
  res.render("vehicles/list.hbs", { vehicles });
});

module.exports = router;
