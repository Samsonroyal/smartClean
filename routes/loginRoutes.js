const express = require("express");
const router = express.Router();
const LoginDetails = require("../models/login");
const passport = require("passport");
const roles = require("../roles");

router.get("/", (req, res) => {
  res.render("login");
});
//checks email and password
router.post(
  "/",
  passport.authenticate("local", { failureRedirect: "/login" }),
  (req, res) => {
    try {
      req.session.user = req.user;
      const userRole = roles[req.user.role];
      if (userRole == "admin") {
        res.redirect("/adminDashboard");
      } else 
      {
        res.redirect("/customerPage");
      }
    }
    catch(err){
        console.log(err)
    }
  }
);

module.exports = router;
