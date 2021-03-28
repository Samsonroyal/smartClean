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
  
    //update truck details

router.get('/update/:id', async (req, res) => {
    try {
        const updateTruck = await Truck.findOne({ _id: req.params.id })
        res.render('updateTruck', { user: updateTruck, viewTitle:'Update Truck' })
    } catch (err) {
      console.log(err)
        res.status(400).send("Unable to find item in the database");
    }
  })

  // route to save the updated data
router.post('/update', async (req, res) => {
    try {
        await Truck.findOneAndUpdate({_id:req.query.id}, req.body,{new:true})
        res.redirect('/regTruck/truckList')
    } catch (err) {
        res.status(404).send("Unable to update item in the database");
    }
  })
  
  //delete truck record from the database
router.get('/delete/:id', async (req, res) => {
    try {
        await Truck.findByIdAndDelete({ _id: req.params.id })
        res.redirect('/regTruck/truckList')
    } catch (err) {
        res.status(400).send("Unable to delete item in the database");
    }
  })









module.exports=router