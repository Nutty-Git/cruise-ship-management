import React from 'react';
import { useNavigate } from 'react-router-dom';

const ManagerDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">📋 Manager Dashboard</h2>
      
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <h5 className="card-title">View Catering Orders</h5>
              <p className="card-text">Review food orders placed by voyagers.</p>
              <button className="btn btn-secondary" onClick={() => navigate('/manager-catering-orders')}>
                View Orders
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <h5 className="card-title">View Bookings</h5>
              <p className="card-text">Check user bookings by type (resort, movie, party, etc.).</p>
              <button className="btn btn-secondary" onClick={() => navigate('/manager-bookings')}>
                View Bookings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerDashboard;
