import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './VehicleList.css';

const VehicleList = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div>
      <h2 className='title'>All Vehicles</h2>
      <button className='new-btn' onClick={() => handleClick('create')}>New</button>
      <div className="button-container">
        <button className='vehicle-btn' onClick={() => handleClick("1")}>Vehicle 1</button>
        <button className='vehicle-btn' onClick={() => handleClick("2")}>Vehicle 2</button>
        <button className='vehicle-btn' onClick={() => handleClick("3")}>Vehicle 3</button>
        <button className='vehicle-btn' onClick={() => handleClick("4")}>Vehicle 4</button>
        <button className='vehicle-btn' onClick={() => handleClick("5")}>Vehicle 5</button>
        <button className='vehicle-btn' onClick={() => handleClick("6")}>Vehicle 6</button>
        <button className='vehicle-btn' onClick={() => handleClick("7")}>Vehicle 7</button>
        <button className='vehicle-btn' onClick={() => handleClick("8")}>Vehicle 8</button>
        <button className='vehicle-btn' onClick={() => handleClick("9")}>Vehicle 9</button>
        <button className='vehicle-btn' onClick={() => handleClick("10")}>Vehicle 10</button>
        <button className='vehicle-btn' onClick={() => handleClick("11")}>Vehicle 11</button>
        <button className='vehicle-btn' onClick={() => handleClick("12")}>Vehicle 12</button>
      </div>
    </div>
  );
}

export default VehicleList;
