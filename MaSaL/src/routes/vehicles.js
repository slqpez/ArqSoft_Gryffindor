const express = require("express");
const router = express.Router();
const pool = require("../database.js");
const path = require("path");
const { isLoggedIn } = require("../lib/auth.js");

router.get("/add", isLoggedIn, (req, res) => {
  res.render("vehicles/add.hbs");
});

router.post("/add", isLoggedIn, async (req, res) => {
  const { nameDriver, vehiclePlate, phone, description } = req.body;
  const newVehicle = {
    nameDriver,
    vehiclePlate,
    phone,
    description,
    user_id: req.user.id
  };
  await pool.query("INSERT INTO vehicles set ?", [newVehicle]);
  req.flash("success", "Vehículo almacenado correctamente.");
  res.redirect("/vehicles");
});

router.get("/", isLoggedIn, async (req, res) => {
  const vehicles = await pool.query(
    "SELECT * FROM vehicles WHERE user_id = ?",
    [req.user.id]
  );
  res.render("vehicles/list.hbs", { vehicles });
});

router.get("/delete/:id", isLoggedIn, async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM vehicles WHERE id=?", [id]);
  req.flash("success", "Vehículo eliminado correctamente.");
  res.redirect("/vehicles");
});

router.get("/edit/:id", isLoggedIn, async (req, res) => {
  const { id } = req.params;
  const vehicles = await pool.query("SELECT * FROM vehicles WHERE id = ?", [
    id
  ]);

  res.render("vehicles/edit", isLoggedIn, { vehicle: vehicles[0] });
});

router.post("/edit/:id", isLoggedIn, async (req, res) => {
  const { id } = req.params;
  const { nameDriver, vehiclePlate, phone, description } = req.body;
  const newVehicle = {
    nameDriver,
    vehiclePlate,
    phone,
    description
  };
  await pool.query("UPDATE vehicles set ?  WHERE id = ?", [newVehicle, id]);
  req.flash(
    "success",
    "La información del vehículo se ha modificado correctamente."
  );
  res.redirect("/vehicles");
});

module.exports = router;
