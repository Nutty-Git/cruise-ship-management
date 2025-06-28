const Order = require('../models/Order');
const Voyager = require('../models/Voyager');

exports.getCateringOrders = async (req, res) => {
  try {
    const orders = await Order.find({ itemType: 'CateringItem' }).populate('voyagerId', 'name email').populate('itemId', 'name type price');;
    res.json(orders);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.getStationeryOrders = async (req, res) => {
  try {
    const orders = await Order.find({ itemType: 'StationeryItem' }).populate('voyagerId', 'name email').populate('itemId', 'name category price');;
    res.json(orders);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
