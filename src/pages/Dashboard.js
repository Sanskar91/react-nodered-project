import React, { useEffect } from 'react';
import Logout from './Logout';
function Dashboard() {
  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role === 'admin') window.location.href = '/add-employee';
    else if (role === 'employee') window.location.href = '/request-leave';
    else window.location.href = '/login';
  }, []);

  return (
    <div>
      <h3>Redirecting...</h3>
      <Logout />
    </div>
  );
}
export default Dashboard;
