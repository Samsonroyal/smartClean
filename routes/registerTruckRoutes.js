const express =require('express')
const router=express.Router()
const Truck = require('../models/regTruck')





router.get('/',(req,res)=>{
    res.render('regTruck')
})


router.post('/truckList', async (req, res) => {
    try {
        const truck = new Truck(req.body);
        await truck.save()
        res.redirect('/regTruck/truckList')
    }catch(err){
        console.log(err);
        res.send('Sorry! Something went wrong.');
    }
  })
  
  //view truck details
  router.get('/truckList', async (req, res) => {
    try {
        // find all the data in the Truck collection
        const truckDetails = await Truck.find();
        res.render('viewTruck', { users: truckDetails, title: 'Truck List' })
    } catch (err) {
        res.send('Failed to retrive truck details');
    }
  })
  








module.exports=router