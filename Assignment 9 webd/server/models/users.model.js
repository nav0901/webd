const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    password: { type: String },
  },
  { collection: "users" }
);

const model = mongoose.model("UserData", User);

module.exports = model;
