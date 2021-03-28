const express = require("express");
const router = express.Router();
var multer = require("multer");
var upload = multer({ dest: "uploads/" });
const Driver = require('../models/regDriver')

router.get("/", (req, res) => {
  res.render("regDriver",{viewTitle:'Register Driver'});
});





// file upload
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploadedFiles");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
var upload = multer({ storage: storage });

router.post('/driverList', upload.single('fileUpload'), async (req, res) => {
  try {
      const driver = new Driver(req.body);
      driver.fileUpload = req.file.path;
      await driver.save()
      res.redirect('/regDriver/driverList')
  }catch(err){
      console.log(err);
      res.send('Sorry! Something went wrong.');
  }
})

//view driver details
router.get('/driverList', async (req, res) => {
  try {
      // find all the data in the Employee collection
      const driverDetails = await Driver.find();
      res.render('viewDriver', { users: driverDetails, title: 'Driver List' })
  } catch (err) {
      res.send('Failed to retrive driver details');
  }
})

//update driver details

router.get('/update/:id', async (req, res) => {
  try {
      const updateDriver = await Driver.findOne({ _id: req.params.id })
      res.render('updateDriver', { user: updateDriver, viewTitle:'Update Driver' })
  } catch (err) {
    console.log(err)
      res.status(400).send("Unable to find item in the database");
  }
})
// route to save the updated data
router.post('/update', async (req, res) => {
  try {
      await Driver.findByIdAndUpdate({_id:req.query.id}, req.body,{new:true})
      res.redirect('/regDriver/driverList')
  } catch (err) {
      res.status(404).send("Unable to update item in the database");
  }
})

//delete and employee record from the database
router.get('/delete/:id', async (req, res) => {
  try {
      await Driver.findByIdAndDelete({ _id: req.params.id })
      res.redirect('/regDriver/driverList')
  } catch (err) {
      res.status(400).send("Unable to delete item in the database");
  }
})




module.exports = router;
