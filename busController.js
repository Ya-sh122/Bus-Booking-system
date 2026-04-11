const db = require('../db/db-connection');

// POST /buses
exports.addBus = (req, res) => {
    const { bus_name, total_seats, available_seats } = req.body;

    const sql = "INSERT INTO buses (bus_name, total_seats, available_seats) VALUES (?, ?, ?)";
    db.query(sql, [bus_name, total_seats, available_seats], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: "Bus added successfully" });
    });
};



// GET /buses/available/:seats
exports.getAvailableBuses = (req, res) => {
    const seats = req.params.seats;

    const sql = "SELECT * FROM buses WHERE available_seats > ?";
    db.query(sql, [seats], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(result);
    });
};