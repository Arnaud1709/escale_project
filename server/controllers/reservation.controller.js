const Reservation = require("../models/reservation.model");

exports.createReservation = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      email,
      phone,
      startDate,
      endDate,
      numberPerson,
      amount,
    } = req.body;

    const reservations = new Reservation({
      firstname,
      lastname,
      email,
      phone,
      startDate,
      endDate,
      numberPerson,
      amount,
    });

    await reservations.save();

    res.status(201).send({ message: "Reservation created successfully!" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
