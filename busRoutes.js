const express = require('express');
const router = express.Router();
const busController = require('../controllers/busController');


router.post('/buses', busController.addBus);
router.get('/buses/available/:seats', busController.getAvailableBuses);


module.exports= router;
