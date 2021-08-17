const express = require("express");
const router = express.Router();
const Conductor = require("../models/regConductor");

router.get("/", (req, res) => {
  if (req.session.user) {
    res.render("regConductor");
  } else {
    res.redirect("/login");
  }
});

router.post("/conductorList", async (req, res) => {
  if (req.session.user) {
    try {
      const conductor = new Conductor(req.body);

      await conductor.save();
      res.redirect("/regConductor/conductorList");
      console.log(req.body)
    } catch (err) {
      console.log(err);
      res.send("Sorry! Something went wrong.");
    }
  } else {
    res.redirect("/login");
  }
});

//view conductor details
router.get("/conductorList", async (req, res) => {
  if (req.session.user) {
    try {
      // find all the data in the Employee collection
      const conductorDetails = await Conductor.find();
      res.render("viewConductor", {
        users: conductorDetails,
        title: "Conductor List",
      });
    } catch (err) {
      res.send("Failed to retrive conductor details");
    }
  } else {
    res.redirect("/login");
  }
});

//update conductor details

router.get("/update/:id", async (req, res) => {
  if (req.session.user) {
    try {
      const updateConductor = await Conductor.findOne({ _id: req.params.id });
      res.render("updateConductor", {
        user: updateConductor,
        viewTitle: "Update Conductor",
      });
    } catch (err) {
      console.log(err);
      res.status(400).send("Unable to find item in the database");
    }
  } else {
    res.redirect("/login");
  }
});

// route to save the updated data
router.post("/update", async (req, res) => {
  if (req.session.user) {
    try {
      await Conductor.findOneAndUpdate({ _id: req.query.id }, req.body, {
        new: true,
      });
      res.redirect("/regConductor/conductorList");
    } catch (err) {
      res.status(404).send("Unable to update item in the database");
    }
  } else {
    res.redirect("/login");
  }
});

//delete and employee record from the database
router.get("/delete/:id", async (req, res) => {
  if (req.session.user) {
    try {
      await Conductor.findByIdAndDelete({ _id: req.params.id });
      res.redirect("/regConductor/conductorList");
    } catch (err) {
      res.status(400).send("Unable to delete item in the database");
    }
  } else {
    res.redirect("/login");
  }
});

//search using name of Conductor
router.get("/conductorSearch", async (req, res) => {
  if (req.session.user) {
    try {
      let conductorDetails = await Conductor.find();
      if (req.query.name) {
        conductorDetails = await Conductor.find({ name: req.query.name });
      }
      res.render("viewConductor", {
        users: conductorDetails,
        title: "Conductor List",
      });
    } catch (err) {
      console.log(err);
      res.send("Failed to retrieve driver Details");
    }
  } else {
    res.redirect("/login");
  }
  // find all data in conductor collection
});

module.exports = router;
