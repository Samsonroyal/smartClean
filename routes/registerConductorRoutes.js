const express =require('express')
const router=express.Router()
const Conductor = require('../models/regConductor')

router.get('/',(req,res)=>{
    res.render('regConductor')
})

router.post('/conductorList',  async (req, res) => {
    try {
        const conductor = new Conductor(req.body);
        
        await conductor.save()
        res.redirect('/regConductor/conductorList')
    }catch(err){
        console.log(err);
        res.send('Sorry! Something went wrong.');
    }
  })

  //view conductor details
router.get('/conductorList', async (req, res) => {
    try {
        // find all the data in the Employee collection
        const conductorDetails = await Conductor.find();
        res.render('viewConductor', { users: conductorDetails, title: 'Conductor List' })
    } catch (err) {
        res.send('Failed to retrive conductor details');
    }
  })

  //update conductor details

router.get('/update/:id', async (req, res) => {
    try {
        const updateConductor = await Conductor.findOne({ _id: req.params.id })
        res.render('updateConductor', { user: updateConductor, viewTitle:'Update Conductor' })
    } catch (err) {
      console.log(err)
        res.status(400).send("Unable to find item in the database");
    }
  })

  // route to save the updated data
router.post('/update', async (req, res) => {
    try {
        await Conductor.findOneAndUpdate({_id:req.query.id}, req.body,{new:true})
        res.redirect('/regConductor/conductorList')
    } catch (err) {
        res.status(404).send("Unable to update item in the database");
    }
  })
  
  //delete and employee record from the database
router.get('/delete/:id', async (req, res) => {
    try {
        await Conductor.findByIdAndDelete({ _id: req.params.id })
        res.redirect('/regConductor/conductorList')
    } catch (err) {
        res.status(400).send("Unable to delete item in the database");
    }
  })








module.exports=router