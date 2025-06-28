import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeadCookDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">👨‍🍳 Head Cook Dashboard</h2>
      
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <h5 className="card-title">View Food Orders</h5>
              <p className="card-text">Track and prepare food items ordered by voyagers.</p>
              <button
                className="btn btn-success"
                onClick={() => navigate('/headcook-catering-orders')}
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

export default HeadCookDashboard;
