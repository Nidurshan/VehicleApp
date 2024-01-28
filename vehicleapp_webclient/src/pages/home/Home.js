import React from 'react';
import '../home/Home.css';
import { Navigate, useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <main>
      <h1 className='main-text'>Welcome to <br /><span>VehicleApp</span></h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, odio! Rem ullam quisquam, ipsam, quo voluptatum perspiciatis ipsa <br /> consequuntur nemo reprehenderit labore ut eius nesciunt architecto, deleniti nisi doloribus illo eaque possimus. Corporis quidem facere <br /> quos sit quis distinctio, asperiores officiis, omnis illo alias esse aperiam? Consequatur tempore aliquam ipsam!</p>
      <button className='vehicleView-btn' onClick={() => handleClick('vehicles')}>All Vehicles</button>
    </main>
  )
}

export default Home;
