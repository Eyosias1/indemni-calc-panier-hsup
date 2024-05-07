import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

function Login({onLoginSuccess}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://cid-server-side.onrender.com/auth/login', { email, password });
      const token = response.data.token;

      // Store JWT in local storage
      localStorage.setItem('token', token);

      // Redirect to dashboard or other protected page
      onLoginSuccess(email);
    } catch (error) {
      console.error(error);
      alert('Invalid email or password');
    }
  };

  return (
    <div className='section'>
      <div className='form-login'>
        <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
      </div>
    </div>
  );
}

export default Login;
