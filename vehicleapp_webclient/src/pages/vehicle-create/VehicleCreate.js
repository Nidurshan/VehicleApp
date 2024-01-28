import React from 'react';
import './VehicleCreate.css';

const VehicleCreate = () => {
  return (
    <div>
      <h1 className='main-title'>Create a new Vehicle</h1>
      <div className='input-container'>
        <input type="text" id='id' placeholder='Enter Id' />
        <br />
        <input type="text" id='model' placeholder='Enter Model' />
        <br />
        <input type="text" id='number' placeholder='Enter Number' />
        <br />
        <input type="text" id='type' placeholder='Enter Type' />
        <br />
        <input type="text" id='led' placeholder='Enter Lisence Expiry Date' />
        <br />
        <input type="text" id='ied' placeholder='Enter Insurance Expiry Date' />
        <br />
        <input type="text" id='eed' placeholder='Enter Emission Expiry Date' />
      </div>
      <button className='create-btn'id='create-btn'>Create</button>
    </div>
  )
}

export default VehicleCreate;
