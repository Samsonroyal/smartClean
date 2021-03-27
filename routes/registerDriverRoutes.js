const express = require("express");
const router = express.Router();
var multer = require("multer");
var upload = multer({ dest: "uploads/" });
const Driver = require('../models/regDriver')

router.get("/", (req, res) => {
  res.render("regDriver");
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



module.exports = router;
