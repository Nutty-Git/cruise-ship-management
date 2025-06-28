import React, { useEffect, useState } from 'react';
import axios from '../services/api';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('/voyagers/orders', {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.data.length === 0) {
          setMessage('You have not placed any orders yet.');
        } else {
          setOrders(res.data);
        }
      } catch (err) {
        setMessage('Failed to fetch orders.');
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">🧾 My Orders (Catering & Stationery)</h2>
      {message ? (
        <div className="alert alert-info text-center">{message}</div>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-striped shadow-sm text-center">
            <thead className="table-success">
              <tr>
                <th>Item</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Ordered On</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order.itemId?.name || 'N/A'}</td>
                  <td>{order.itemId?.category || 'N/A'}</td>
                  <td>{order.quantity}</td>
                  <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
