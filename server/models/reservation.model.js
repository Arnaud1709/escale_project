const mongoose = require("mongoose");

const Reservation = mongoose.model(
  "Reservation",
  new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    phone: String,
    password: String,
    startDate: Date,
    endDate: Date,
    numberPerson: Number,
    amount: Number,
  })
);

module.exports = Reservation;