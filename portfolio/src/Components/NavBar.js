import React, { useState } from 'react';
import '../Css/navbar.css';
import indianFlag from '../Images/indainflag.jpg';

function TopBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="left-navbar">
        <h1>Roshanvijay.</h1>
        <img src={indianFlag} alt="Indian Flag" className="indian-flag" />
      </div>
      <div className="nav-right-container">
        <button className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`right-navbar ${isOpen ? 'active' : ''}`}>
          <a href="#landing" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#education" onClick={() => setIsOpen(false)}>Education</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
