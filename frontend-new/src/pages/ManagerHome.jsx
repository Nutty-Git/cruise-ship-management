import React from 'react';
import { Link } from 'react-router-dom';

const ManagerHome = () => {
  const name = localStorage.getItem('name') || 'Manager';

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">👨‍💼 Welcome, {name}</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        <Link to="/manager" className="bg-white p-6 border rounded shadow hover:bg-blue-50">
          <h2 className="text-xl font-semibold text-blue-700">📊 View Bookings by Type</h2>
        </Link>
      </div>
    </div>
  );
};

export default ManagerHome;
