const Voyager = require('../models/Voyager');
const Booking = require('../models/Booking'); 
const Order = require('../models/Order');     
const jwt = require('jsonwebtoken');

// Utility: Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });
};

// REGISTER
const registerVoyager = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await Voyager.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'Voyager already exists' });
    }

    const newUser = await Voyager.create({ name, email, password });
    res.status(201).json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      token: generateToken(newUser._id),
    });
  } catch (err) {
    res.status(500).json({ message: 'Registration failed' });
  }
};

// LOGIN
const loginVoyager = async (req, res) => {
  const { email, password } = req.body;

  try {
    const voyager = await Voyager.findOne({ email });

    if (voyager && (await voyager.matchPassword(password))) {
      res.json({
        _id: voyager._id,
        name: voyager.name,
        email: voyager.email,
        token: generateToken(voyager._id),
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Login failed' });
  }
};

// BOOK A SERVICE (resort, movie, salon, etc.)
const bookService = async (req, res) => {
  const { type, item, date } = req.body;

  try {
    console.log('Booking payload:', { type, item, date, user: req.user?._id });
    const booking = new Booking({
      voyagerId: req.user._id,
      type,
      item,
      date,
    });

    await booking.save();
    res.status(201).json({ message: 'Booking successful', booking });
  } catch (err) {
    console.error('Booking failed:', err.message);
    res.status(500).json({ message: 'Booking failed' });
  }
};

// VIEW MY BOOKINGS
const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ voyagerId: req.user._id });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch bookings' });
  }
};

// PLACE AN ORDER (catering or stationery)
const placeOrder = async (req, res) => {
  const { itemId, quantity, itemType } = req.body;

  try {
    const order = new Order({
      voyagerId: req.user._id,
      itemId,
      itemType,
      quantity,
    });

    await order.save();
    res.status(201).json({ message: 'Order placed successfully', order });
  } catch (err) {
    console.error('Order error:', err); 
    res.status(500).json({ message: 'Order failed' });
  }
};

// VIEW MY ORDERS
const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ voyagerId: req.user._id }).populate('itemId').sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (err) {
    console.error('Get Orders Error:', err);
    res.status(500).json({ message: 'Failed to fetch orders' });
  }
};

module.exports = {
  registerVoyager,
  loginVoyager,
  bookService,
  getMyBookings,
  placeOrder,
  getMyOrders,
};
