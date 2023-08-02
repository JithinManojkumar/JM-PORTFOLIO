const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    Name: { type: String },
    Email: { type: String },
    Message: { type: String },
  },
  { collection: "Portfolio Messages" }
);

const model = mongoose.model("User", userSchema);

module.exports = model;
