const mongoose = require('mongoose');

const stationerySchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, enum: ['pen', 'pencil', 'notebook', 'sharpener'], required: true },
  price: { type: Number, required: true },
  description: String
}, { timestamps: true });

module.exports = mongoose.model('stationery', stationerySchema);
