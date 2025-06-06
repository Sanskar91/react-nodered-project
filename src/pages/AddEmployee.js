import React, { useState } from 'react';
import axios from 'axios';
import Logout from './Logout';
function AddEmployee() {
  const [form, setForm] = useState({ username: '', email: '', password: '', role: 'employee' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    await axios.post('http://localhost:1880/register-employee', form, {
      headers: { Authorization: `Bearer ${token}` }
    });
    alert("Employee registered!");
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <h2>Register Employee</h2>
      <input placeholder="Username" onChange={e => setForm({ ...form, username: e.target.value })} />
      <input type="email" placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
      <select onChange={e => setForm({ ...form, role: e.target.value })}>
        <option value="employee">Employee</option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit">Register</button>
      <Logout />
    </form>
  );
}
export default AddEmployee;
