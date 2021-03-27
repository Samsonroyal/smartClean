const express =require('express')
const router=express.Router()
const CustomerRequest = require('../models/customerSchedulePickUp')








router.get('/',(req,res)=>{
    res.render('customerSchedulePickUp')
})





module.exports=router