import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Logout from './Logout';
function ReviewLeaves() {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    const fetchLeaves = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:1880/view-leaves', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setLeaves(res.data);
    };
    fetchLeaves();
  }, []);

  const actOnLeave = async (id, action) => {
    const token = localStorage.getItem('token');
    const url = action === 'approve' ? `/approve-leave/${id}` : `/reject-leave/${id}`;
    await axios.post(`http://localhost:1880${url}`, {}, {
      headers: { Authorization: `Bearer ${token}` }
    });
    alert(`Leave ${action}d.`);
    window.location.reload();
  };

  return (
    <div>
      <h2>Review Leaves</h2><br/>
      <Logout /><br/>
      <ul>
        {leaves.map(l => (
          <li key={l.id}>
            {l.email} - {l.date} - {l.reason} - {l.status}
            <button onClick={() => actOnLeave(l.id, 'approve')}>Approve</button>
            <button onClick={() => actOnLeave(l.id, 'reject')}>Reject</button>
          </li>
        ))}
      </ul>
      
    </div>
  );
}
export default ReviewLeaves;
