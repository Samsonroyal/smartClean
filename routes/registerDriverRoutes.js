const express = require("express");
const router = express.Router();
var multer = require("multer");
var upload = multer({ dest: "uploads/" });
const Driver = require("../models/regDriver");

router.get("/", (req, res) => {
  if (req.session.user) {
    res.render("regDriver", { viewTitle: "Register Driver" });
  } else {
    
    res.redirect("/login");
  }
});

// file upload
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploadedFiles");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
var upload = multer({ storage: storage });

router.post("/driverList", upload.single("fileUpload"), async (req, res) => {
  if (req.session.user) {
    try {
      const driver = new Driver(req.body);
      driver.fileUpload = req.file.path;
      await driver.save();
      res.redirect("/regDriver/driverList");
    } catch (err) {
      console.log(err);
      res.send("Sorry! Something went wrong.");
    }
  } else {
    console.log("can't find session");
    res.redirect("/login");
  }
});

//view driver details
router.get("/driverList", async (req, res) => {
  if (req.session.user) {
    try {
      // find all the data in the Employee collection
      const driverDetails = await Driver.find();
      res.render("viewDriver", { users: driverDetails, title: "Driver List" });
    } catch (err) {
      res.send("Failed to retrive driver details");
    }
  } else {
    console.log("can't find session");
    res.redirect("/login");
  }
});

//update driver details

router.get("/update/:id", async (req, res) => {
  if (req.session.user) {
    try {
      const updateDriver = await Driver.findOne({ _id: req.params.id });
      res.render("updateDriver", {
        user: updateDriver,
        viewTitle: "Update Driver",
      });
    } catch (err) {
      console.log(err);
      res.status(400).send("Unable to find item in the database");
    }
  } else {
    console.log("can't find session");
    res.redirect("/login");
  }
});
// route to save the updated data
router.post("/update", async (req, res) => {
  if (req.session.user) {
    try {
      await Driver.findOneAndUpdate({ _id: req.query.id }, req.body, {
        new: true,
      });

      res.redirect("/regDriver/driverList");
    } catch (err) {
      console.log(err);
      res.status(404).send("Unable to update item in the database");
    }
  } else {
    console.log("can't find session");
    res.redirect("/login");
  }
});

//delete and employee record from the database
router.get("/delete/:id", async (req, res) => {
  if (req.session.user) {
    try {
      await Driver.findByIdAndDelete({ _id: req.params.id });
      res.redirect("/regDriver/driverList");
    } catch (err) {
      res.status(400).send("Unable to delete item in the database");
    }
  } else {
    console.log("can't find session");
    res.redirect("/login");
  }
});
//search using name of driver
router.get("/driverSearch", async (req, res) => {
  if (req.session.user) {
    try {
      let driverDetails = await Driver.find();
      if (req.query.name) {
        driverDetails = await Driver.find({ name: req.query.name });
      }
      res.render("viewDriver", { users: driverDetails, title: "Driver List" });
    } catch (err) {
      console.log(err);
      res.send("Failed to retrieve driver Details");
    }
  } else {
    console.log("can't find session");
    res.redirect("/login");
  }
  // find all data in driver collection
});

module.exports = router;
