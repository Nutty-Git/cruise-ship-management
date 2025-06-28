import React, { useState } from 'react';
import axios from '../services/api';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Home = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/voyagers/login', loginData);
      console.log('Login response:', res.data);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('name', res.data.name);
      setMessage('Login successful');
      navigate('/dashboard');
    } catch (err) {
        console.error('Login error:', err.response?.data || err.message);
      setMessage('Login failed.Please check your credentials.');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/voyagers/register', registerData);
      setMessage(res.data.message || 'Registration successful. Please log in.');
      setRegisterData({ name: '', email: '', password: '' });
    } catch (err) {
      setMessage('Registration failed');
    }
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">🚢 Cruise Ship Management</h1>
      <p className="text-center text-muted mb-5">Welcome! Please login or register to continue.</p>

      {message && <div className="alert alert-info text-center">{message}</div>}

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card p-4 shadow-sm">
            <h4 className="mb-3 text-primary">Login</h4>
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={loginData.email}
                  onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
            </form>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card p-4 shadow-sm">
            <h4 className="mb-3 text-success">Register</h4>
            <form onSubmit={handleRegister}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={registerData.name}
                  onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={registerData.email}
                  onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={registerData.password}
                  onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                  required
                />
              </div>
              <button type="submit" className="btn btn-success w-100">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
