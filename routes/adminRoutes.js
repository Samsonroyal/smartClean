const express =require('express')
const router=express.Router()
const Driver = require('../models/regDriver')


router.get('/',(req,res)=>{
    res.render('dashboard')
})

router.get('/customerRequest',(req,res)=>{
    res.render('viewCustomerRequest')
})

router.get('/driverList',(req,res)=>{
    res.render('viewDriver')
})

router.get('/conductorList',(req,res)=>{
    res.render('viewConductor')
})

router.get('/truckList',(req,res)=>{
    res.render('viewTruck')
})













module.exports=router