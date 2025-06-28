import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from '../../frontend-new/src/pages/Dashboard'; 
import Register from '../../frontend-new/src/pages/Register';
import Login from '../../frontend-new/src/pages/Login';
import BookResort from '../../frontend-new/src/pages/BookResort';
import MyBookings from '../../frontend-new/src/pages/MyBookings';
import BookMovie from '../../frontend-new/src/pages/BookMovie';
import BookSalon from '../../frontend-new/src/pages/BookSalon';
import BookFitness from '../../frontend-new/src/pages/BookFitness';
import BookParty from '../../frontend-new/src/pages/BookParty';
import OrderCatering from '../../frontend-new/src/pages/OrderCatering';
import OrderStationery from '../../frontend-new/src/pages/OrderStationery';
import MyOrders from '../../frontend-new/src/pages/MyOrders';
import ManagerDashboard from '../../frontend-new/src/pages/ManagerDashboard';
import HeadCookDashboard from '../../frontend-new/src/pages/HeadCookDashboard';
import SupervisorDashboard from '../../frontend-new/src/pages/SupervisorDashboard';
import AdminDashboard from '../../frontend-new/src/pages/AdminDashboard';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/book-resort" element={<BookResort />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/book-movie" element={<BookMovie />} />
        <Route path="/book-salon" element={<BookSalon />} />
        <Route path="/book-fitness" element={<BookFitness />} />
        <Route path="/book-party" element={<BookParty />} />
        <Route path="/order-catering" element={<OrderCatering />} />
        <Route path="/order-stationery" element={<OrderStationery />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/manager" element={<ManagerDashboard />} />
        <Route path="/head-cook" element={<HeadCookDashboard />} />
        <Route path="/supervisor" element={<SupervisorDashboard />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
