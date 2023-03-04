import React from 'react';
import Footer from './footer';
import Icons from './icons';
import ProjectCards from './myProjects';
import './styles/Projects.css';

const Projects = () => (
  <>
    <Icons />
    <div className="logo-img" />
    <ProjectCards />
    <Footer />
  </>
);

export default Projects;
