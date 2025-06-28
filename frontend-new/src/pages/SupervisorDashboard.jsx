import React from 'react';
import { useNavigate } from 'react-router-dom';

const SupervisorDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">🧾 Supervisor Dashboard</h2>
      
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <h5 className="card-title">View Stationery Orders</h5>
              <p className="card-text">Monitor and verify stationery items ordered by users.</p>
              <button
                className="btn btn-dark"
                onClick={() => navigate('/supervisor-stationery-orders')}
              >
                View Orders
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupervisorDashboard;
