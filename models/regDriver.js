const mongoose = require("mongoose");

//create a schema for the data you need to save
const regDriverSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Please Enter  name",
  },
  telephone: {
    type: String,
    required: "Please Enter  telephone number",
  },
  licenseNumber: {
    type: String,
    unique: true,
    required: "Please Enter license number",
  },
  nin: {
    type: String,
    unique: true,
    required: "Please Enter NIN",
  },
  gender: String,
  fileUpload: String,
  residence: String,
  dob: Date,
});

module.exports = mongoose.model("regDriver", regDriverSchema);