const express =require('express')
const router=express.Router()
const CustomerOrder = require('../models/customerSchedulePickUp')


router.get('/',(req,res)=>{
    if (req.session.user) {
    res.render('customerSchedulePickUp')
}else {
    res.redirect("/login");
  }
})

router.post("/orderList", async (req, res) => {
    if (req.session.user) {
      try {
        const customerOrder = new CustomerOrder(req.body);
        await customerOrder.save();
        res.redirect("/customerSchedulePickUp/orderList");
      } catch (err) {
        console.log(err);
        res.send("Sorry! Something went wrong.");
      }
    } else {
      res.redirect("/login");
    }
  });
  router.get("/orderList", async (req, res) => {
    if (req.session.user) {
      try {
        // find all the data in the Truck collection
        const  orderDetails = await CustomerOrder.find();
        res.render("viewCustomerOrder", { orders:orderDetails, title: "Order List" });
      } catch (err) {
        res.send("Failed to retrive order details");
      }
    } else {
      res.redirect("/login");
    }
  });



module.exports=router