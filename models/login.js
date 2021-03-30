const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  role: {
    type: String,
  },
  password: {
    type: String,
  },
});


module.exports= mongoose.model('LoginDetails',loginSchema)
