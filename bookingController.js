const { Booking } = require("../models");

exports.createBooking = async (req, res) => {
  try {
    const booking = await Booking.create({
      seatNumber: req.body.seatNumber,
      UserId: req.body.userId,
      BusId: req.body.busId,
    });

    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};