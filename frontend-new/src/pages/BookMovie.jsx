import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../services/api';

const BookMovies = () => {
  const [movie, setMovie] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post(
        '/voyagers/book',
        {
          type: 'movie',     // 
          item: movie,
          date,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage(res.data.message || 'Booking successful!');
      setMovie('');
      setDate('');
      setTimeout(() => {
        alert('Booking successful!');
        navigate('/my-bookings');
      }, 500);
    } catch (error) {
      setMessage('Booking failed. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">🎬 Book a Movie</h2>
      <form onSubmit={handleBooking} className="p-4 border rounded bg-light shadow-sm">
        <div className="mb-3">
          <label htmlFor="movie" className="form-label">Movie Title</label>
          <input
            type="text"
            id="movie"
            className="form-control"
            value={movie}
            onChange={(e) => setMovie(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="date" className="form-label">Booking Date</label>
          <input
            type="date"
            id="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">Book Movie</button>
        {message && <div className="alert alert-info mt-3">{message}</div>}
      </form>
    </div>
  );
};

export default BookMovies;
