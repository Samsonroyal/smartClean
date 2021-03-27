const express =require('express')
const router=express.Router()
const SignUpDetails = require('../models/signUp')

router.get('/',(req,res)=>{
    res.render('signUp')
})













module.exports=router