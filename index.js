const User = require("./user");
const Bus = require("./bus");
const Booking = require("./booking");

// User ↔ Booking
User.hasMany(Booking);
Booking.belongsTo(User);

// Bus ↔ Booking
Bus.hasMany(Booking);
Booking.belongsTo(Bus);

module.exports = { User, Bus, Booking };