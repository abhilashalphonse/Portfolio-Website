import React from 'react';
import './styles/projects.scss';
import Amazon from './assets/amazon.png';
import Tesla from './assets/tesla.png';
import Portfolio from './assets/portfolio.png';
import 'font-awesome/css/font-awesome.min.css';

const Projects = () => (
  <div className="projects" id="projects">
    <h1>My Projects</h1>
    <div className="projects-container">
      <div className="project">
        <div className="image-container">
          <img src={Amazon} alt="Amazcon-Clone" />
        </div>
        <h3>Amazon Clone</h3>
        <p>This is a React JS application where you can add and delete products from the shopping basket and checkout page.</p>
        <div className="technologies">
          <h5>HTML</h5>
          <h5>CSS</h5>
          <h5>React</h5>
          <h5>Redux</h5>
        </div>
        <div className="links">
          <a href="https://clone-e3da2.web.app/"><i className="fas fa-globe" /> Live Demo</a>
          <a href="https://github.com/abhilashalphonse/Amazon-Clone-ReactJS"><i className="fab fa-github" /> Code </a>
        </div>
      </div>
      <div className="project">
        <div className="image-container">
          <img src="https://user-images.githubusercontent.com/73619282/109374361-d9cb6800-7882-11eb-87cd-18aadd02df39.png" alt="Bookstore" />
        </div>
        <h3>Netflix Clone</h3>
        <p>This is a clone of Netflix Homepage. Netflix is a subscription based video streaming app</p>
        <div className="technologies">
          <h5>HTML</h5>
          <h5>CSS</h5>
          <h5>React</h5>
        </div>
        <div className="links">
          <a href="https://netflix-react-project-0.web.app/" target="_blank" rel="noopener noreferrer"><i className="fas fa-globe" /> Live Demo</a>
          <a href="https://github.com/abhilashalphonse/Netflix-Clone" target="_blank" rel="noopener noreferrer"><i className="fab fa-github" /> Code</a>
        </div>
      </div>
      <div className="project">
        <div className="image-container">
          <img src={Tesla} alt="Todo App" />
        </div>
        <h3>Tesla Homepage</h3>
        <p>This is a clone of Tesla website Homepage. Tesla is an electric cars manufacturer based in United States.</p>
        <div className="technologies">
          <h5>HTML</h5>
          <h5>CSS</h5>
          <h5>Typescript</h5>
          <h5>React</h5>
        </div>
        <div className="links">
          <a href="https://github.com/abhilashalphonse/Tesla-Homepage" target="_blank" rel="noopener noreferrer"><i className="fab fa-github" /> Code</a>
        </div>
      </div>
      <div className="project">
        <div className="image-container">
          <img src={Portfolio} alt="Fumigadora Olsan" />
        </div>
        <h3>Portfolio Website</h3>
        <p>This is a Portfolio website where you can show your projects and Include About You section and Contact section..</p>
        <div className="technologies">
          <h5>HTML</h5>
          <h5>CSS</h5>
          <h5>Sass</h5>
          <h5>React</h5>
        </div>
        <div className="links">
          <a href="https://fumigadora-olsan.web.app/" target="_blank" rel="noopener noreferrer"><i className="fas fa-globe" /> Live Demo</a>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;