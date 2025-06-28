import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../services/api';

const OrderStationery = () => {
  const [items, setItems] = useState([]);
  const [selectedId, setSelectedId] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('/admin/stationery', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setItems(res.data);
      } catch (err) {
        setMessage('Failed to fetch stationery items.');
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
          itemType: 'stationery',
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage('Order placed successfully!');
      setSelectedId('');
      setQuantity(1);

      setTimeout(() => {
        alert('Order placed successfully!');
        navigate('/my-orders');
      }, 500);
    } catch (err) {
      alert(err.response?.data?.msg || 'Order failed');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">📝 Order Stationery</h2>
      <form onSubmit={handleOrder} className="p-4 bg-light border rounded shadow-sm">
        <div className="mb-3">
          <label className="form-label">Select Stationery Item</label>
          <select
            className="form-select"
            value={selectedId}
            onChange={(e) => setSelectedId(e.target.value)}
            required
          >
            <option value="">-- Select Item --</option>
            {items.length === 0 ? (
              <option disabled>No stationery items available</option>
            ) : (
              items.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.name} - ₹{item.price}
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

        <button type="submit" className="btn btn-primary w-100">
          Place Order
        </button>

        {message && <div className="alert alert-info mt-3">{message}</div>}
      </form>
    </div>
  );
};

export default OrderStationery;
