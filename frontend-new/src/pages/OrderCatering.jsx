import React, { useState, useEffect } from 'react';
import axios from '../services/api';
import { useNavigate } from 'react-router-dom';


const OrderCatering = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [selectedId, setSelectedId] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('/admin/catering', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setItems(res.data);
      } catch (err) {
        setMessage('Failed to fetch catering items.');
      }
    };
    fetchItems();
  }, []);

  const handleOrder = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post(
        '/voyagers/order',
        {
          itemId: selectedId,
          quantity,
          itemType: 'catering',
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage(res.data.message || 'Order placed successfully!');
      setSelectedId('');
      setQuantity(1);
      setTimeout(() => {
          alert('Booking successful!');
          navigate('/my-orders');
        }, 1000);
    } catch (err) {
      setMessage('Order failed. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">🍽️ Order Catering</h2>
      <form onSubmit={handleOrder} className="p-4 bg-light border rounded shadow-sm">
        <div className="mb-3">
          <label className="form-label">Select Catering Item</label>
          <select
            className="form-select"
            value={selectedId}
            onChange={(e) => setSelectedId(e.target.value)}
            required
          >
            <option value="">-- Select Item --</option>
            {items.length === 0 ? (
              <option disabled>No catering items available</option>
            ) : (
              items.map((item) => (
                  <option key={item._id} value={item._id}>
                  {(item.name || 'Unnamed')} - ₹{item.price || '0'}
              </option>
              ))
            )}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Quantity</label>
          <input
            type="number"
            className="form-control"
            value={quantity}
            min="1"
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-success w-100">
          Place Order
        </button>

        {message && <div className="alert alert-info mt-3">{message}</div>}
      </form>
    </div>
  );
};

export default OrderCatering;
