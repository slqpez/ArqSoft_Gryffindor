//TODO
const express = require("express");
const router = express.Router();
const pool = require("../database.js");
const path = require("path");
const { isLoggedIn } = require("../lib/auth.js");

router.get("/list", (req, res) => {
  res.render("users/list.hbs");
});

router.post("/add", async (req, res) => {
  const { nameDriver, vehiclePlate, phone, description } = req.body;
  const newVehicle = {
    nameDriver,
    vehiclePlate,
    phone,
    description,
    user_id: req.user.id
  };
  const newUser = {
    userName: vehiclePlate,
    password: 123,
    fullName: nameDriver,
    id: req.user.id + 100,
    rol: "driver"
  };
  await pool.query("INSERT INTO users set ?", [newUser]);
  await pool.query("INSERT INTO vehicles set ?", [newVehicle]);
  req.flash("success", "Vehículo almacenado correctamente.");
  res.redirect("/vehicles");
});

router.get("/", async (req, res) => {
  const users = await pool.query("SELECT * FROM users");
  res.render("users/list.hbs", { users });
});

router.get("/delete/:id", async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM vehicles WHERE user_id = ?", [id]);
  await pool.query("DELETE FROM users WHERE id=?", [id]);
  await pool.query("ALTER TABLE users AUTO_INCREMENT = 1");
  req.flash("success", "Usuario eliminado correctamente.");
  res.redirect("/users");
});

module.exports = router;
