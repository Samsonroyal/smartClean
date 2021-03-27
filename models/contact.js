const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Please Enter  name",
  },
  telephone: {
    type: String,
    required: "Please Enter  telephone number",
  },
  email: {
    type: String,
  },
  message: {
    type: String,
  },
});

module.exports= mongoose.model('ContactDetails',contactSchema)