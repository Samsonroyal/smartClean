const express =require('express')
const router=express.Router()
const Contact = require('../models/contact')

router.get('/',(req,res)=>{
    res.render('contact')
})












module.exports=router