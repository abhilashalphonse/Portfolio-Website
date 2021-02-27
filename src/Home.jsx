import React from 'react';
import './styles/home.scss';

const Home = () => (
  <div className="home" id="home">
    <h1>I am <span>A</span>bhilash <span>A</span>lphonse</h1>
    <h3>Full Stack Developer</h3>
    <div className="contact">
      <a href="https://github.com/abhilashalphonse" target="_blank" rel="noopener noreferrer"><i className="fab fa-github" /></a>
    </div>
  </div>
);

export default Home;