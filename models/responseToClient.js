const mongoose = require("mongoose");

const responseToClientSchema = new mongoose.Schema({
  driver: {
    type: String,
  },
  conductor: {
    type: String,
  },
  date: {
    type: String,
  },
  truckType: {
    type: String,
  },
  regNo: {
    type: String,
  },
  code: {
    type: String,
  },
  truckLocation: {
    type: String,
  },
  destination: {
    type: String,
  },
  
});

module.exports = mongoose.model(
  "ResponseToClient",
  responseToClientSchema
);
