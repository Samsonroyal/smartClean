//dependencies
const express =require('express')
const router=express.Router()


router.get('/',(req,res)=>{
    res.render('index')
})

router.get('/index',(req,res)=>{
    res.render('index')
})

router.get('/aboutus',(req,res)=>{
    res.render('aboutus')
})

router.get('/contact',(req,res)=>{
    res.render('contact')
})

router.get('/customerSignup',(req,res)=>{
    res.render('customerSignup')
})

router.get('/dashboard',(req,res)=>{
    res.render('dashboard')
})

router.get('/login',(req,res)=>{
    res.render('login')
})

router.get('/regConductor',(req,res)=>{
    res.render('regConductor')
})

router.get('/regDriver',(req,res)=>{
    res.render('regDriver')
})

router.get('/regTruck',(req,res)=>{
    res.render('regTruck')
})

router.get('/customerPage',(req,res)=>{
    res.render('customerPage')
})

router.get('/customerSchedulePickUp',(req,res)=>{
    res.render('customerSchedulePickUp')
})





















module.exports=router