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

router.post("/regDriver", upload.single("fileUpload"), (req, res) => {
  const driver = new Driver(req.body);
  driver.fileUpload = req.file.path;
  driver
    .save()
    .then(() => {
      res.send("Thank you for your registration!");
    })
    .catch((err) => {
      console.log(err);
      res.send("Sorry! Something went wrong.");
    });
});

module.exports = router;
