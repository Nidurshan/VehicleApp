import React from 'react';
// import { useParams } from 'react-router-dom';
import './VehicleDetail.css';

const VehicleDetail = () => {

  // const { id } = useParams();

  // const deleteVehicle = (id) => {
  //   alert(`Are you want to delete this vehicle ${id}?`);
  // }

  return (
    <div>
      <h2 className='title'>Vehicle Details</h2>
      {/* <p>Vehicle ID: {id}</p> */}
      <div className='input-container'>
        <div className='input-box'>
          {/* <label for="id">Id</label> */}
          <input type="text" id='id' placeholder='Enter Id' />
        </div>
        <div className='input-box'>
          {/* <label for="model">Model</label> */}
          <input type="text" id='model' placeholder='Enter Model' />
        </div>
        <div className='input-box'>
          {/* <label for="number">Number</label> */}
          <input type="text" id='number' placeholder='Enter Number' />
        </div>
        <div className='input-box'>
          {/* <label for="type">Type</label> */}
          <input type="text" id='type' placeholder='Enter Type' />
        </div>
        <div className='input-box'>
          {/* <label for="led">Lisence Expiry</label> */}
          <input type="text" id='led' placeholder='Enter Lisence Expiry Date' />
        </div>  
        <div className='input-box'>
          {/* <label for="ied">Insurance Expiry</label> */}
          <input type="text" id='ied' placeholder='Enter Insurance Expiry Date' />
        </div>
        <div className='input-box'>
          {/* <label for="eed">Emission Expiry</label> */}
          <input type="text" id='eed' placeholder='Enter Emission Expiry Date' />
        </div>
      </div>
      <div className='btn-container'>
        <button className='update-btn'>Update</button>
        <button className='delete-btn'>Delete</button>
      </div>
    </div>
  );
}

export default VehicleDetail;
