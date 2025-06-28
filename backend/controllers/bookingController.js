const Booking = require('../models/Booking');

exports.createBooking = async (req, res) => {
  try {
    const { type, details, date, time } = req.body;
    const voyagerId = req.user.id; 

    const booking = new Booking({ voyagerId, type, details, date, time });
    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.getMyBookings = async (req, res) => {
  try {
    const voyagerId = req.user.id;
    const bookings = await Booking.find({ voyagerId }).sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
