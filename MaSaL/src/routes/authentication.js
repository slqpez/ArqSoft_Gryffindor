const express = require("express");
const router = express.Router();
const passport = require("passport");
const { isLoggedIn, isNotLoggedIn } = require("../lib/auth.js");

router.get("/signup", isNotLoggedIn, (req, res) => {
  res.render("auth/signUp");
});

router.get("/pay", isNotLoggedIn, (req, res) => {
  res.render("auth/pay");
});

router.post(
  "/signup",
  isNotLoggedIn,
  passport.authenticate("local.signup", {
    successRedirect: "/pay",
    failureRedirect: "/signup",
    failerFlash: true
  })
);

router.get("/signin", isNotLoggedIn, (req, res) => {
  res.render("auth/signIn");
});

router.post("/signin", isNotLoggedIn, (req, res, next) => {
  passport.authenticate("local.signin", {
    successRedirect: "/vehicles",
    failureRedirect: "/signin",
    failerFlash: true
  })(req, res, next);
});

router.get("/profile", isLoggedIn, (req, res, next) => {
  res.render("profile");
});

router.get("/logout", isLoggedIn, (req, res, next) => {
  req.logOut();
  res.redirect("/");
});

module.exports = router;
