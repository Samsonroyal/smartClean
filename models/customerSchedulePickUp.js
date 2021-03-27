const mongoose = require("mongoose");

const customerSchedulePickUpSchema = new mongoose.Schema({
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
  location: {
    type: String,
  },
  service: {
    type: String,
  },
  requestType: {
    type: String,
  },
  time: {
    type: String,
  },
  numberOfConductors: {
    type: String,
  },
});

module.exports= mongoose.model('CustomerRequest',customerSchedulePickUpSchema)