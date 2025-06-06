import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:1880/login', { email, password });
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('role', res.data.role);
    window.location.href = '/dashboard';
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input type="email" placeholder="Email" required onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" required onChange={e => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
}
export default Login;
 