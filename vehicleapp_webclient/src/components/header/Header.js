import React from 'react';
import './Header.css';
import Image from './vms-letter-technology-logo-design-on-white-background-vms-creative-initials-letter-it-logo-concept-vms-letter-design-vector-removebg-preview.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();

  return (
        <div className='nav'>
        <div className='left'>
            <img src={Image} alt="" />
        </div>
        <div className="right">
          <ul className='links'>
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/vehicles")}>Vehicles</li>
          </ul>
        </div>
        </div>
  )
}

export default Header;
