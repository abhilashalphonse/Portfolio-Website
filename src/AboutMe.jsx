import React from 'react';
import './styles/aboutMe.scss';

const AboutMe = () => (
  <div className="about-me" id="about-me">
    <h1>About Me</h1>
    <div className="content">
      <div className="image-container">
        <img src="https://i.imgur.com/FMi68LI.jpg" alt="About me" />
      </div>
      <div className="text">
        <p>
          I am a full stack developer that use <span>HTML5</span>, <span>CSS3</span>, <span>NextJS</span>, <span>ReactJS</span>, <span>Redux</span> to create frontend, and <span>Java - SpringBoot</span>, <span> NodeJS</span>, <span>MySQL</span>, <span>SQL</span>, <span> MongoDB </span> to create APIs.<br />
          I am a self-taught person and I love to learn to be a better <span>professional</span> and a better <span>person</span>.
        </p>
        <h3>Hobbies</h3>
        <div className="hobbies">
          <div className="container">
            <div className="icon-container">
              <i className="fas fa-play-circle" />
            </div>
            <h5>Listen Music</h5>
          </div>
          <div className="container">
            <div className="icon-container">
              <i className="fas fa-gamepad" />
            </div>
            <h5>Play Video Games</h5>
          </div>
          <div className="container">
            <div className="icon-container">
              <i className="fas fa-tv" />
            </div>
            <h5>Watch Anime</h5>
          </div>
          <div className="container">
            <div className="icon-container">
              <i className="fas fa-book-open" />
            </div>
            <h5>Read Books</h5>
          </div>
          <div className="container">
            <div className="icon-container">
              <i className="fas fa-language" />
            </div>
            <h5>Learn Languages</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutMe;
