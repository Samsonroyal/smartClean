const express = require("express");
const router = express.Router();
const Driver = require("../models/regDriver");
const Conductor = require("../models/regConductor");
const CustomerRequest = require("../models/customerSchedulePickUp");
const Truck = require("../models/regTruck");
const ResponseToClient = require("../models/responseToClient")

router.get("/", (req, res) => {
  try {
    if (req.session.user) {
      res.render("dashboard", { adminName: req.user.name });
    } else {
      res.redirect("/login");
    }
  } catch (err) {
    console.log(err);
  }
});

// router.get("/customerRequest", (req, res) => {
//   res.render("viewCustomerRequest");
// });

router.get("/driverList", (req, res) => {
  res.render("viewDriver");
});

router.get("/conductorList", (req, res) => {
  res.render("viewConductor");
});

router.get("/truckList", (req, res) => {
  res.render("viewTruck");
});

// router.get("/responses", (req, res) => {
//   res.render("responses");
// });

router.get("/customerRequest", async (req, res) => {
  if (req.session.user) {
    try {
      // find all the data in the Truck collection
      const orderDetails = await CustomerRequest.find();
      
      res.render("viewCustomerRequest", {
        orderss: orderDetails,
        title: "Order List",
      });
    } catch (err) {
      res.send("Failed to retrive order details");
    }
  } else {
    res.redirect("/login");
  }
});

router.get("/respondToOrder/:id", async (req, res) => {
  const clientDetails = await CustomerRequest.findOne({ _id: req.params.id });
  const driverDetails = await Driver.find();
  const conductorDetails = await Conductor.find();
  const truckDetails = await Truck.find();
  
  


  res.render("respondOrder", {
    drivers: driverDetails,
    conductors: conductorDetails,
    trucks: truckDetails,
    client: clientDetails,
    clientName: clientDetails.name,
    
    

  });
});

// logout
router.post("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
      } else {
        return res.redirect("/login");
      }
    });
  }
});

//response to client

router.post("/message", async (req, res) => {
  if (req.session.user) {
    try {
      const responseStuff = new ResponseToClient(req.body);
      await responseStuff.save();
       res.redirect("/adminDashboard/message");
      console.log(req.body)
    } catch (err) {
      console.log(err);
      res.send("Sorry! Something went wrong.");
    }
  } else {
    res.redirect("/login");
  }
});


router.get("/message", async (req, res) => {
  if (req.session.user) {
    try {
      // find all the data in the Truck collection
      const responseDetails = await ResponseToClient.find()
      const clientDetails = await CustomerRequest.findOne({ _id: req.params.id },{name:1});
      res.render("responses", { responses: responseDetails, clientName: clientDetails});
    } catch (err) {
      console.log(err)
      res.send("Failed to retrive response");
    }
  } else {
    res.redirect("/login");
  }
});




module.exports = router;
