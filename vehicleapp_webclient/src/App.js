import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import VehicleList from './pages/vehicle-list/VehicleList';
import VehicleDetail from './pages/vehicle-detail/VehicleDetail';
import VehicleCreate from './pages/vehicle-create/VehicleCreate';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vehicles" element={<VehicleList />} />
          <Route path="/vehicles/:id" element={<VehicleDetail />} />
          <Route path="/vehicles/create" element={<VehicleCreate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
