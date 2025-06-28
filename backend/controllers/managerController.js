const Booking = require('../models/Booking');

exports.viewBookingsByType = async (req, res) => {
  try {
    const type = req.query.type;
    const filter = type ? { type } : {};
    const bookings = await Booking.find(filter).populate('voyagerId', 'name email');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
