import React, { useState } from 'react';
import axios from 'axios';

function Register({onLoginSuccess}) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://cid-server-side.onrender.com/auth/register', {
        username,
        email,
        password
      });
      const token = response.data.token;
      localStorage.setItem('token', token);
      localStorage.setItem('userEmail', email);
      onLoginSuccess(email);
      // Handle the response from your Flask app
      // For example, you can show a success message or redirect the user to the login page
       // assuming the response is JSON data
    } catch (error) {
      // Handle errors
      console.error('Error registering:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
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
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
