const express = require('express');
const router = express.Router();
const { viewBookingsByType } = require('../controllers/managerController');
const { protect } = require('../middlewares/authMiddleware');

router.get('/bookings', protect, viewBookingsByType);

module.exports = router;
