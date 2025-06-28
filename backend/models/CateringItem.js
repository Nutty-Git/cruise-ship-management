const mongoose = require('mongoose');

const cateringSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  type: { type: String }, 
  price: { type: Number, required: true }
});

module.exports = mongoose.model('catering', cateringSchema);
