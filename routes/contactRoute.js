const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");

router.get("/", (req, res) => {
  res.render("contact");
});

router.post("/", async (req, res) => {
  try {
    const contact = new Contact(req.body);

    await contact.save();
    res.send("Message sent successfully, we'll reply to you later ");
   
  } catch (err) {
    console.log(err);
    res.send("Sorry! Something went wrong.");
  }
});

module.exports = router;
