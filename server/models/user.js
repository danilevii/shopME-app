const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: { type: String, default: null, required: [true, "Please enter First Name"] },
  last_name: { type: String, default: null, required: [true, "Please enter Last Name"] },
  email: { type: String, unique: "An Account is already registered with that email", required: [true, "Please enter email"] },
  password: { type: String },
  address: { type: String },
  token: { type: String },
});

module.exports = mongoose.model("user", userSchema);