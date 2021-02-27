import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Projects from './Projects';
import AboutMe from './AboutMe';
import Contact from './Contact';
import './styles/app.scss';

const App = () => (
  <>
    <div className="background">
      <Navbar />
      <Home />
    </div>
    <Projects />
    <div className="background">
      <AboutMe />
    </div>
    <Contact />
  </>
);

export default App;

