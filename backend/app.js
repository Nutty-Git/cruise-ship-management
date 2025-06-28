const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const voyagerRoutes = require('./routes/voyagerRoutes');
const adminRoutes = require('./routes/adminRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const orderRoutes = require('./routes/orderRoutes');
const managerRoutes = require('./routes/managerRoutes');
const staffRoutes = require('./routes/staffRoutes');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use('/api/voyagers', voyagerRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/voyagers/book', bookingRoutes);
app.use('/api/voyagers/order', orderRoutes);
app.use('/api/manager', managerRoutes);
app.use('/api', staffRoutes);

// Routes placeholder
app.get('/', (req, res) => {
  res.send('Cruise Ship Management API');
});

// DB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log('✅ MongoDB connected successfully');
  app.listen(process.env.PORT, () => {
    console.log(`🚀 Server running on port ${process.env.PORT}`);
  });
})
.catch(err => {
  console.error('❌ MongoDB connection failed:', err.message);
});
