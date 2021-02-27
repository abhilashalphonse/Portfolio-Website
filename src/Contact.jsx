import React from 'react';
import './styles/contact.scss';

const Contact = () => (
  <div className="contact-background" id="contact">
    <div className="contact">
      <h1>Contact Me</h1>
      <div className="social-media">
        <a href="https://github.com/abhilashalphonse" target="_blank" rel="noopener noreferrer"><i className="fab fa-github" /> Abhilash Alphonse</a>
        <a href="mailto:abhilashalphonse.dev@outlook.com"><i className="far fa-envelope" /> abhilashalphonse.dev@outlook.com</a>
      </div>
    </div>
  </div>
);

export default Contact;