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
  








module.exports=router