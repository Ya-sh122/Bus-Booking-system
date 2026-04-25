const express = require("express");
const controller = require("../controller/bookingController");
const router = express.Router();

router.post("/", controller.createBooking);

module.exports = router;