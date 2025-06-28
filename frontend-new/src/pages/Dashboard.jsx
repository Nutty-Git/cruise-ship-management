import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const name = localStorage.getItem('name') || 'Voyager';

  const tiles = [
    { path: '/book-resort', label: '🏖️ Book Resort' },
    { path: '/book-movie', label: '🎬 Book Movie' },
    { path: '/book-salon', label: '💇 Book Salon' },
    { path: '/book-fitness', label: '🏋️ Book Fitness' },
    { path: '/book-party', label: '🎉 Book Party' },
    { path: '/my-bookings', label: '📋 My Bookings' },
    { path: '/order-catering', label: '🍽️ Order Catering' },
    { path: '/order-stationery', label: '✏️ Order Stationery' },
    { path: '/my-orders', label: '🧾 My Orders' },
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4 display-5 fw-bold">🚢 Welcome, {name}!</h1>
      <div className="row g-4">
        {tiles.map(({ path, label }) => (
          <div key={path} className="col-12 col-sm-6 col-md-4">
            <Link to={path} className="btn btn-outline-primary w-100 py-3 shadow-sm fs-5">
              {label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
