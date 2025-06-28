const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  voyagerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Voyager',
    required: true
  },
  itemId: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'itemType',
    required: true
  },
  itemType: {
    type: String,
    enum: ['catering', 'stationery'], 
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    default: 1
  },
  orderDate: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
