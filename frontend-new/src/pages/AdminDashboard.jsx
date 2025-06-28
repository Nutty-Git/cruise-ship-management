import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">🛠️ Admin Dashboard</h2>
      
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <h5 className="card-title">Manage Catering</h5>
              <p className="card-text">Add, update or delete catering menu items.</p>
              <button className="btn btn-primary" onClick={() => navigate('/admin-catering')}>Go</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <h5 className="card-title">Manage Stationery</h5>
              <p className="card-text">Add, update or delete stationery items.</p>
              <button className="btn btn-primary" onClick={() => navigate('/admin-stationery')}>Go</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <h5 className="card-title">View Orders</h5>
              <p className="card-text">Review bookings and orders made by users.</p>
              <button className="btn btn-primary" onClick={() => navigate('/admin-orders')}>Go</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
