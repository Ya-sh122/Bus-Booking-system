const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db-connection");

const Booking = sequelize.define("Booking", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  seatNumber: DataTypes.INTEGER,
});

module.exports = Booking;