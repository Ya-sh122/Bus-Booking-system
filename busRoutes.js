const express = require("express");
const controller = require("../controller/busController");
const router = express.Router();

router.post("/", controller.createBus);
router.get("/:id/bookings", controller.getBusBookings);

module.exports = router;