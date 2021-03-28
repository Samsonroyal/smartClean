const mongoose = require("mongoose");

const regConductorSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  telephone: {
    type: String,
  },
  nin: {
    type: String,
  },
  gender: String,
  residence: String,
  dob: String,
});

module.exports = mongoose.model("Conductor", regConductorSchema);
