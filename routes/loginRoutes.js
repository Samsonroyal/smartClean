const express =require('express')
const router=express.Router()
const LoginDetails = require('../models/login')
const passport = require('passport');

router.get('/',(req,res)=>{
    res.render('login')
})
//checks email and password
router.post('/',passport.authenticate('local', {failureRedirect: '/login'}),(req,res)=>{
    req.session.user = req.user;
    // if(req.user.role.selected=='client'){
    //     res.redirect('customerPage')
    // }else if(req.user.role.selected=='admin'){
    //     res.redirect('dashboard')  
    // }
        res.redirect('/adminDashboard')
    
})











module.exports=router