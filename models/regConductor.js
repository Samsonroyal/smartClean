const mongoose = require("mongoose");

const regConductorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Please Enter  name",
  },
  telephone: {
    type: String,
    required: "Please Enter  telephone number",
  },
  nin: {
    type: String,
    unique: true,
    required: "Please Enter NIN",
  },
  gender: String,
  residence: String,
  dob: String,
});

module.exports= mongoose.model('Conductor',regConductorSchema)