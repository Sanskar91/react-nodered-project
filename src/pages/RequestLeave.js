import React, { useState } from 'react';
import axios from 'axios';
import Logout from './Logout';
function RequestLeave() {
  const [form, setForm] = useState({ date: '', reason: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    await axios.post('http://localhost:1880/request-leave', form, {
      headers: { Authorization: `Bearer ${token}` }
    });
    alert("Leave requested!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Request Leave</h2>
      <input type="date" required onChange={e => setForm({ ...form, date: e.target.value })} />
      <input placeholder="Reason" required onChange={e => setForm({ ...form, reason: e.target.value })} />
      <button type="submit">Submit</button>
      <Logout />
    </form>
  );
}
export default RequestLeave;
