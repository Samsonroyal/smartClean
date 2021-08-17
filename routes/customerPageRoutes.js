const express =require('express')
const router=express.Router()
const ResponseToClient = require("../models/responseToClient")
router.get('/',(req,res)=>{
    res.render('customerPage',{clientName: req.user.name})
})

//Response from client
router.get('/message',async(req,res)=>{
  const responseDetails = await ResponseToClient.find();
  res.render('responseFromAdmin',{responses: responseDetails})
})




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
  












module.exports=router