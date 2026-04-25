const { User, Booking, Bus } = require("../models");

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserBookings = async (req, res) => {
  try {
    const { id } = req.params;

    const bookings = await Booking.findAll({
      where: { UserId: id },
      include: [{ model: Bus, attributes: ["busNumber"] }],
    });

    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};