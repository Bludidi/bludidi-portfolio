import React from 'react';
import * as FaIcons from 'react-icons/fa';
import ProjectCards from './myProjects';
import './styles/Projects.css';

const Projects = () => (
  <>
    <section id="projects" className="projects container-div">
      <div className="banner">
        <FaIcons.FaRegFolderOpen size={40} className="head-icon" />
        <h2>Portfolio</h2>
      </div>
      <div className="line">
        <hr />
      </div>
      <br />
      <br />
      <ProjectCards />
    </section>
  </>
);

export default Projects;
