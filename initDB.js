const db = require('./db/db-connection');

const query = `
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS buses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    bus_name VARCHAR(100),
    total_seats INT,
    available_seats INT
);

INSERT INTO users (name, email) VALUES
('Rahul', 'rahul@gmail.com'),
('Amit', 'amit@gmail.com');

INSERT INTO buses (bus_name, total_seats, available_seats) VALUES
('Volvo', 50, 20),
('Sleeper', 40, 5),
('Express', 60, 30);
`;

db.query(query, (err) => {
    if (err) console.log(err);
    else console.log("DB Initialized");

    db.end(); // ✅ correct here
});