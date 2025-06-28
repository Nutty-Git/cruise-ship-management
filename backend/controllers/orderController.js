const Order = require('../models/Order');

exports.placeOrder = async (req, res) => {
  try {
    const { itemId, itemType, quantity } = req.body;
    const voyagerId = req.user.id;

    const order = new Order({ voyagerId, itemId, itemType, quantity });
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ voyagerId: req.user.id }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
