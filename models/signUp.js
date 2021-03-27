const mongoose = require("mongoose");

const signUpSchema = new mongoose.Schema({
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
  password: {
    type: String,
  },
});

module.exports= mongoose.model('SignUpDetails',signUpSchema)