const express =require('express')
const router=express.Router()
const LoginDetails = require('../models/login')

router.get('/',(req,res)=>{
    res.render('login')
})












module.exports=router