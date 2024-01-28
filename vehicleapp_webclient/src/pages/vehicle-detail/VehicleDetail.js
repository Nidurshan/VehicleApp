import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './VehicleDetail.css';
import axios from 'axios';

const VehicleDetail = () => {
  const [vehicle, setVehicle] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const apiUrl = "https://localhost:7184";

  useEffect(() => {
    getVehicleById();
  }, []);

  const getVehicleById = async () => {
    try {
      const response = await axios.get(`${apiUrl}/vehicles/${id}`);
      setVehicle(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteVehicle = async () => {
    try {
      if (window.confirm("Are you sure?")) {
        await axios.delete(`${apiUrl}/vehicles/${id}`);
        navigate('../vehicles');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updateVehicle = async () => {
    try {
      const response = await axios.put(`${apiUrl}/vehicles/${id}`, vehicle);
      console.log(response.data);
      if(() => updateVehicle()){
        alert("Updated successfully");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setVehicle((prevVehicle) => ({
      ...prevVehicle,
      [id]: value,
    }));
  };

  return (
    <div>
      <h2 className='title'>Vehicle Details</h2>

      <div className='input-container-div'>
        <div className='input-box'>
          <label htmlFor="id">Id</label>
          <input type="text" id='id' value={vehicle.id || ''} placeholder='Enter Id' onChange={handleInputChange}/>
        </div>
        <div className='input-box'>
          <label htmlFor="model">Model</label>
          <input type="text" id='model' value={vehicle.model || ''} placeholder='Enter Model' onChange={handleInputChange}/>
        </div>
        <div className='input-box'>
          <label htmlFor="number">Number</label>
          <input type="text" id='number' value={vehicle.number || ''} placeholder='Enter Number' onChange={handleInputChange}/>
        </div>
        <div className='input-box'>
          <label for="type">Type</label>
          <input type="text" id='type' value={vehicle.type || ''} placeholder='Enter Type' onChange={handleInputChange}/>
        </div>
        {/* {vehicle && vehicle.documents && (
          <>
            <div className='input-box'>
              <label for="led">Lisence Expiry</label>
              <input type="date" id='led' value={new Date(vehicle.documents[0].expiryDate).toISOString().split('T')[0]} placeholder='Enter Lisence Expiry Date' />
            </div>  
            <div className='input-box'>
              <label for="ied">Insurance Expiry</label>
              <input type="date" id='ied' value={new Date(vehicle.documents[1].expiryDate).toISOString().split('T')[0]} placeholder='Enter Insurance Expiry Date' />
            </div>
            <div className='input-box'>
              <label for="eed">Emission Expiry</label>
              <input type="date" id='eed' value={new Date(vehicle.documents[2].expiryDate).toISOString().split('T')[0]} placeholder='Enter Emission Expiry Date' />
            </div>
          </>
        )} */}
      </div>

      <div className='btn-container'>
        <button className='update-btn' onClick={() => updateVehicle()}>Update</button>
        <button className='delete-btn' onClick={() => deleteVehicle()}>Delete</button>
      </div>
    </div>
  );
};

export default VehicleDetail;
