const express = require("express");
const router = express.Router();
const passport = require("passport");
const { isLoggedIn, isNotLoggedIn } = require("../lib/auth.js");

router.get("/signup", isNotLoggedIn, (req, res) => {
  res.render("auth/signUp");
});

router.post(
  "/signup",
  isNotLoggedIn,
  passport.authenticate("local.signup", {
    successRedirect: "/vehicles",
    failureRedirect: "/signup",
    failerFlash: true
  })
);

router.get("/signin", isNotLoggedIn, (req, res) => {
  res.render("auth/signIn");
});

router.post("/signin", isNotLoggedIn, (req, res, next) => {
  passport.authenticate("local.signin", {
    successRedirect: "/profile",
    failureRedirect: "/signin",
    failerFlash: true
  })(req, res, next);
});

router.get("/profile", isLoggedIn, (req, res, next) => {
  res.render("profile");
});

router.get("/logout", isLoggedIn, (req, res, next) => {
  req.logOut();
  res.redirect("/signin");
});

module.exports = router;
