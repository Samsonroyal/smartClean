const express = require("express");
const router = express.Router();
const Truck = require("../models/regTruck");

router.get("/", (req, res) => {
  if (req.session.user) {
    res.render("regTruck");
  } else {
    res.redirect("/login");
  }
});

router.post("/truckList", async (req, res) => {
  if (req.session.user) {
    try {
      const truck = new Truck(req.body);
      await truck.save();
      res.redirect("/regTruck/truckList");
    } catch (err) {
      console.log(err);
      res.send("Sorry! Something went wrong.");
    }
  } else {
    res.redirect("/login");
  }
});

//view truck details
router.get("/truckList", async (req, res) => {
  if (req.session.user) {
    try {
      // find all the data in the Truck collection
      const truckDetails = await Truck.find();
      res.render("viewTruck", { users: truckDetails, title: "Truck List" });
    } catch (err) {
      res.send("Failed to retrive truck details");
    }
  } else {
    res.redirect("/login");
  }
});

//update truck details

router.get("/update/:id", async (req, res) => {
  if (req.session.user) {
    try {
      const updateTruck = await Truck.findOne({ _id: req.params.id });
      res.render("updateTruck", {
        user: updateTruck,
        viewTitle: "Update Truck",
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
      await Truck.findOneAndUpdate({ _id: req.query.id }, req.body, {
        new: true,
      });
      res.redirect("/regTruck/truckList");
    } catch (err) {
      res.status(404).send("Unable to update item in the database");
    }
  } else {
    res.redirect("/login");
  }
});

//delete truck record from the database
router.get("/delete/:id", async (req, res) => {
  if (req.session.user) {
    try {
      await Truck.findByIdAndDelete({ _id: req.params.id });
      res.redirect("/regTruck/truckList");
    } catch (err) {
      res.status(400).send("Unable to delete item in the database");
    }
  } else {
    res.redirect("/login");
  }
});

//search using name of truck
router.get("/truckSearch", async (req, res) => {
  if (req.session.user) {
    // find all data in truck collection
    try {
      let truckDetails = await Truck.find();
      if (req.query.truckReg) {
        truckDetails = await Truck.find({ truckReg: req.query.truckReg });
      }
      res.render("viewTruck", { users: truckDetails, title: "Truck List" });
    } catch (err) {
      console.log(err);
      res.send("Failed to retrieve driver Details");
    }
  } else {
    res.redirect("/login");
  }
});

module.exports = router;
