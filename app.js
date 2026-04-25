const userRoutes = require("./routes/userRoutes");
const busRoutes = require("./routes/busRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

app.use("/users", userRoutes);
app.use("/buses", busRoutes);
app.use("/bookings", bookingRoutes);



// POST /users
// {
//   "name": "John Doe",
//   "email": "john@example.com"
// }

// POST /buses
// {
//   "busNumber": "MH12AB1234",
//   "totalSeats": 40,
//   "availableSeats": 30
// }

// POST /bookings
// {
//   "userId": 1,
//   "busId": 1,
//   "seatNumber": 10
// }


// GET /users/1/bookings


// GET /buses/1/bookings