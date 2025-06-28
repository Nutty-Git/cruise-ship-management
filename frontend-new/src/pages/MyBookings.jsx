import React, { useEffect, useState } from 'react';
import axios from '../services/api';

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('/voyagers/bookings', {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.data.length === 0) {
          setMessage('You have no bookings yet.');
        } else {
          setBookings(res.data);
        }
      } catch (err) {
        setMessage('Failed to fetch bookings.');
      }
    };

    fetchBookings();
  }, []);

  const getIcon = (type) => {
    switch (type) {
      case 'resort':
        return '🏖️';
      case 'movie':
        return '🎬';
      case 'salon':
        return '💇‍♀️';
      case 'fitness':
        return '🏋️‍♂️';
      case 'party':
        return '🎉';
      default:
        return '📦';
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">📋 My Bookings</h2>
      {message ? (
        <div className="alert alert-info text-center">{message}</div>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-striped shadow-sm text-center">
            <thead className="table-primary">
              <tr>
                <th>Type</th>
                <th>Item</th>
                <th>Date</th>
                <th>Booked On</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking._id}>
                  <td>{getIcon(booking.type)} {booking.type}</td>
                  <td>{booking.item}</td>
                  <td>{booking.date}</td>
                  <td>{new Date(booking.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyBookings;
