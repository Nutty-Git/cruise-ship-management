const express = require('express');
const router = express.Router();
const {
  addCateringItem,
  updateCateringItem,
  deleteCateringItem,
  addStationeryItem,
  updateStationeryItem,
  deleteStationeryItem,
  getAllCateringItems,
  getAllStationeryItems
} = require('../controllers/adminController');

// Catering routes
router.post('/catering', addCateringItem);
router.put('/catering/:id', updateCateringItem);
router.delete('/catering/:id', deleteCateringItem);
router.get('/catering', getAllCateringItems);

// Stationery routes
router.post('/stationery', addStationeryItem);
router.put('/stationery/:id', updateStationeryItem);
router.delete('/stationery/:id', deleteStationeryItem);
router.get('/stationery', getAllStationeryItems);

module.exports = router;
