const mongoose = require("mongoose");

const customerSchedulePickUpSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  telephone: {
    type: String,
  },
  nin: {
    type: String,
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
  serviceFee: {
    type: String,
  },
});

module.exports = mongoose.model(
  "CustomerRequest",
  customerSchedulePickUpSchema
);
