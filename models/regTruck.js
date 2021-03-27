const mongoose = require("mongoose");

const regTruckSchema = new mongoose.Schema({
  truckType: {
    type: String,
  },
  truckCode: {
    type: String,
  },
  truckReg: {
    type: String,
  },
});

module.exports = mongoose.model('Trucks',regTruckSchema)