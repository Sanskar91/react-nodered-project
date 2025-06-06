import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AddEmployee from './pages/AddEmployee';
import RequestLeave from './pages/RequestLeave';
import ReviewLeaves from './pages/ReviewLeaves';

import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-employee"
          element={
            <ProtectedRoute>
              <AddEmployee />
            </ProtectedRoute>
          }
        />
        <Route
          path="/request-leave"
          element={
            <ProtectedRoute>
              <RequestLeave />
            </ProtectedRoute>
          }
        />
        <Route
          path="/review-leaves"
          element={
            <ProtectedRoute>
              <ReviewLeaves />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}
export default App;
