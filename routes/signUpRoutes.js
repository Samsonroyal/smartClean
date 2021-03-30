const express =require('express')
const router=express.Router()
const SignUpDetails = require('../models/signUp')

router.get('/',(req,res)=>{
    res.render('signUp')
})


router.post('/', async(req,res)=>{
    try{
        const signUp = new SignUpDetails(req.body);
        await SignUpDetails.register(signUp,req.body.password,(err)=>{
            if(err){
                throw err
            }
            res.redirect('/login')
        })
        
    } catch(err){
        console.log(err)
        res.send('Sorry! Something went wrong')
    }

})










module.exports=router