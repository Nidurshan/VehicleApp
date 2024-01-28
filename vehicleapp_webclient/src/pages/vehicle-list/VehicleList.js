import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './VehicleList.css';
import axios from 'axios';

const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);

  const navigate = useNavigate();
  const apiUrl = "https://localhost:7184";

  useEffect(() => {
    getAllVehicles();
  }, [])

  const handleClick = (path) => {
    navigate(path);
  };

  const getAllVehicles = async () => {
    try {
      const response = await axios.get(`${apiUrl}/vehicles`);
      setVehicles(response.data);
    } catch (error) {
      console.error('Error fetching vehicles:', error);
    }
  }

  return (
    <div>
      <h2 className='title'>All Vehicles</h2>
      <button className='new-btn' onClick={() => handleClick('create')}>New</button>
      {
        vehicles.map(vehicle => {
          return (
            <div 
              className='vehicle-thumbnail' 
              key={vehicle.id} 
              onClick={() => handleClick(vehicle.id)}
            >
              <h3>{vehicle.model}</h3>
            </div>
          )
        })
      }
    </div>
  );
}

export default VehicleList;
