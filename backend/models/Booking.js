const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  voyagerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Voyager',
    required: true
  },
  type: {
    type: String,
    enum: ['movie', 'salon', 'fitness', 'resort', 'party'],
    required: true
  },
  item: {
    type: String,
    required: true,
  },
  date: {
    type: String, 
    required: true
  },
  time: {
    type: String
  }
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
