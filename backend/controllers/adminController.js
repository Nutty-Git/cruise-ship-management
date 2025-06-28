const CateringItem = require('../models/CateringItem');
const StationeryItem = require('../models/StationeryItem');

// Catering
exports.addCateringItem = async (req, res) => {
  try {
    console.log('Incoming catering body:', req.body);
    const item = new CateringItem(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (err) {
     console.error('Failed to add catering item:', err.message);
    res.status(500).json({ msg: err.message });
  }
};

exports.updateCateringItem = async (req, res) => {
  try {
    const updated = await CateringItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.deleteCateringItem = async (req, res) => {
  try {
    await CateringItem.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Item deleted' });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.getAllCateringItems = async (req, res) => {
  try {
    const items = await CateringItem.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Stationery
exports.addStationeryItem = async (req, res) => {
  try {
    const item = new StationeryItem(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.updateStationeryItem = async (req, res) => {
  try {
    const updated = await StationeryItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.deleteStationeryItem = async (req, res) => {
  try {
    await StationeryItem.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Item deleted' });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.getAllStationeryItems = async (req, res) => {
  try {
    const items = await StationeryItem.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
