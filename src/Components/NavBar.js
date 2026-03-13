import React from 'react';
import '../Css/navbar.css';
import indianFlag from '../Images/indainflag.jpg'; // Add your flag image here

function TopBar() {
  return (
    <div className="navbar">
      <div className="left-navbar">
        <h1>Roshanvijay.</h1>
        <img src={indianFlag} alt="Indian Flag" className="indian-flag" />
      </div>
      <div className="right-navbar">
        <a href="#landing">Home</a>
        <a href="#education">Education</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}

export default TopBar;
