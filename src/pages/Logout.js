import React from 'react';

function Logout() {
  const handleLogout = () => {
    // 🔁 Step 1: Send logout signal to Node-RED
    fetch('http://localhost:1880/activity', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        role: localStorage.getItem('role') 
      })
    });

    // 🔁 Step 2: Remove items and redirect
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    window.location.href = '/login';
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
}

export default Logout;
