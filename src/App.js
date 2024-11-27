import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserManagement from './components/UserManagement';
import PermissionManagement from './components/PermissionDescription';
import './App.css';
import PermissionDescription from './components/PermissionDescription';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<UserManagement />} />
      
            <Route path="/permissions" element={<PermissionDescription />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

