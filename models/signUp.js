const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const signUpSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  telephone: {
    type: String,
  },
  email: {
    type: String,
  },

  role: {
    type: String,
  },
});

signUpSchema.plugin(passportLocalMongoose, { usernameField: "email" });
module.exports = mongoose.model("SignUpDetails", signUpSchema);
