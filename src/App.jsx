import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Employee from './pages/Employee';
import Dealer from './pages/Dealer';
import Cars from './pages/Cars';
import Dashboard from './pages/Dashboard';
import CreateEmployee from './pages/CreateEmployee';
import MainLayout from './Components/MainLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} /> {/* default route */}
          <Route path="employee" element={<Employee />} />
          <Route path="dealer" element={<Dealer />} />
          <Route path="cars" element={<Cars />} />
          <Route path="create-employee" element={<CreateEmployee />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
