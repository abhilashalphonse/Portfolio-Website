import React from 'react';
import './styles/navbar.scss';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">
      <h1>A<span>bhilash </span>A<span>lphonse</span></h1>
    </div>
    <div className="menu-container">
      <ul className="menu">
        <li className="responsive-menu">
          <div className="drop-down">
            <div className="menu-icon"><i className="fas fa-bars" /></div>
            <div className="menu-item"><a href="#home">Home</a></div>
            <div className="menu-item"><a href="#projects">Projects</a></div>
            <div className="menu-item"><a href="#about-me">About Me</a></div>
            <div className="menu-item"><a href="#contact">Contact</a></div>
          </div>
        </li>
        <li className="item"><a href="#home">Home</a></li>
        <li className="item"><a href="#projects">Projects</a></li>
        <li className="item"><a href="#about-me">About Me</a></li>
        <li className="item"><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;