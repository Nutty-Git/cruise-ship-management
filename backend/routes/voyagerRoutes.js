const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/authMiddleware');
const { getMyBookings } = require('../controllers/voyagerController');
const { registerVoyager, loginVoyager, placeOrder, bookService } = require('../controllers/voyagerController');
const { getMyOrders } = require('../controllers/voyagerController');

router.post('/register', registerVoyager);
router.post('/login', loginVoyager);
router.get('/bookings', protect, getMyBookings);
router.post('/order', protect, placeOrder);
router.post('/book', protect, bookService);
router.get('/orders', protect, getMyOrders);


module.exports = router;
