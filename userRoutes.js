const express = require("express");
const controller = require("../controller/userController");
const router = express.Router();

router.post("/", controller.createUser);
router.get("/:id/bookings", controller.getUserBookings);

module.exports = router;