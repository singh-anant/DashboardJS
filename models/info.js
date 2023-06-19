const mongoose = require("mongoose");
const infoSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
  },
  dateofbirth: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  telephone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  created_At: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("Info", infoSchema);
