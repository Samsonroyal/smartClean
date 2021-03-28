const mongoose = require("mongoose");

//create a schema for the data you need to save
const regDriverSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  telephone: {
    type: String,
  },
  licenseNumber: {
    type: String,
  },
  nin: {
    type: String,
  },
  gender: {
    type: String,
  },
  fileUpload: {
    type: String,
  },
  residence: {
    type: String,
  },
  dob: {
    type: String,
  },
});

module.exports = mongoose.model("Driver", regDriverSchema);
