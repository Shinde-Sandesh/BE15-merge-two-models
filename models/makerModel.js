const mongoose = require("mongoose");

const makerSchema = new mongoose.Schema({
  name: String,
  logo: String,
  tagline: String,
});

const Maker = mongoose.model("maker", makerSchema);

module.exports = Maker;
