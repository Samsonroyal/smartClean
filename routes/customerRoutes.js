const express =require('express')
const router=express.Router()

router.get('/customerPage',(req,res)=>{
    res.render('customerPage')
})

router.get('/customerSchedulePickUp',(req,res)=>{
    res.render('customerSchedulePickUp')
})











module.exports=router