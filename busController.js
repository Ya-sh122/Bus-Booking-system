const { Bus, Booking, User } = require("../models");

exports.createBus = async (req, res) => {
  try {
    const bus = await Bus.create(req.body);
    res.status(201).json(bus);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBusBookings = async (req, res) => {
  try {
    const { id } = req.params;

    const bookings = await Booking.findAll({
      where: { BusId: id },
      include: [{ model: User, attributes: ["name", "email"] }],
    });

    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};