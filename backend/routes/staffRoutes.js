const express = require('express');
const router = express.Router();
const { getCateringOrders, getStationeryOrders } = require('../controllers/staffController');

// const { protect, adminOnly } = require('../middlewares/authMiddleware');

router.get('/head/catering-orders', getCateringOrders);
router.get('/supervisor/stationery-orders', getStationeryOrders);

module.exports = router;
