const express =require('express')
const router=express.Router()

router.get('/regDriver',(req,res)=>{
    res.render('regDriver')
})

router.get('/regConductor',(req,res)=>{
    res.render('regConductor')
})


router.get('/regTruck',(req,res)=>{
    res.render('regTruck')
})









module.exports=router