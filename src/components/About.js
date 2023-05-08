import React from 'react';
import Icons from './icons';
import Modal from './modal';
import './styles/About.css';

const About = () => (
  <>
    <Icons />
    <div className="logo-img" />
    <div className="mid-section about">
      <h3>Welcome to about me!</h3>
    </div>
    <Modal />
  </>
);

export default About;
