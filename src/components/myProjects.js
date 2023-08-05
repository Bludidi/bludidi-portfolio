/* eslint-disable */

import React, { Component } from 'react';
import myImage from '../images/ProjectsImages/TODO.png';
import myImage1 from '../images/ProjectsImages/crypto_home.png';
import myImage2 from '../images/ProjectsImages/leaderboard.png';
import myImage3 from '../images/ProjectsImages/iBudget.png';
import myImage4 from '../images/ProjectsImages/mm2.png'
import * as VscIcons from 'react-icons/vsc';

class ProjectCards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myProjects: [
        {
          id: 1,
          name: 'To-Do List',
          affiliation: 'Microverse project',
          image: myImage,
          summary:
            'This app helps users to keep track of daily tasks. Users are able to add, edit and remove tasks.',
          fullDescription: '',
          techAndTools: ['JavaScript',' • ', 'CSS',' • ', 'Webpack',' • ', 'Git',' • ', 'HTML',' • ', 'VS Code'],
          liveLink: 'https://my-to-do-nine.vercel.app/',
          sourceLink: 'https://github.com/Bludidi/My-To-Do',
          complexity: '',
        },
        {
          id: 2,
          name: 'CRYPTO HOME',
          affiliation: 'Microverse project',
          image: myImage1,
          summary:
            'Crypto Home is a web based app that display the top ten crypto currencies based on their value.\
            It uses data from Coin Base API and render it for users who visit the site.',
          fullDescription: '',
          techAndTools: ['React',' • ','Redux',' • ','API',' • ','CSS',' • ', 'Git',' • ', 'HTML',' • ','VS Code'],
          liveLink: 'https://crypto-home.vercel.app/',
          sourceLink: 'https://github.com/Bludidi/crypto-home',
          complexity: '',
        },
        {
          id: 3,
          name: 'Leaderboard',
          affiliation: 'Microverse project',
          image: myImage2,
          summary:
            "Leaderboard is a web app the uses API to store user's names and scores.\
             Users are able to update their score with these beautiful UI.",
          fullDescription: '',
          techAndTools: ['JavaScript',' • ','Webpack',' • ','CSS',' • ','Jest', ' • ', 'Git',' • ', 'VS Code'],
          liveLink: 'https://rad-dolphin-326202.netlify.app/',
          sourceLink: 'https://github.com/Bludidi/Leaderboard',
          complexity: '',
        },
        {
          id: 4,
          name: 'iBudget',
          affiliation: 'Microverse project',
          image: myImage3,
          summary:
            'iBudget is a web based app that helps users to track the money they spent or they have to spent.\
            A user must sign up and login to create categories of items they buy the app will do the calculations.',
          fullDescription: '',
          techAndTools: ['Ruby',' • ', 'Rails',' • ', 'Git',' • ', 'VS Code',' • ','PostgreSQL'],
          liveLink: 'https://www.loom.com/share/14ce0b6d10954ef785049182e81a18d6?sid=f64d0071-6292-4e91-bd4b-c229abb64542',
          sourceLink: 'https://github.com/Bludidi/iBudget',
          complexity: '',
        },
        {
          id: 5,
          name: "Math Magicians",
          affiliation: 'Microverse project',
          image: myImage4,
          summary:
            "Math Magicians is a simple web app which has a calculator that performs basic arithmetic calculations and also displays quotes from the Ninja API.",
          fullDescription: '',
          techAndTools: ['Javascript',' • ', 'React',' • ', 'API',' • ', 'Git',' • ', 'VS Code'],
          liveLink: 'https://bludidi-math-app.netlify.app/',
          sourceLink: 'https://github.com/Bludidi/math-app',
          complexity: '',
        },
      ],
      currentPage: 1,
      projectsPerPage: 2,
    };
  }

  handleClickNext = () => {
    const { myProjects, currentPage, projectsPerPage } = this.state;
    const totalPages = Math.ceil(myProjects.length / projectsPerPage);
    if (currentPage < totalPages) {
      this.setState((prevState) => ({
        currentPage: prevState.currentPage + 1,
      }));
    }
  };

  handleClickPrev = () => {
    const { currentPage } = this.state;
    if (currentPage > 1) {
      this.setState((prevState) => ({
        currentPage: prevState.currentPage - 1,
      }));
    }
  };

  render() {
    const { myProjects, currentPage, projectsPerPage } = this.state;

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = myProjects.slice(
      indexOfFirstProject,
      indexOfLastProject
    );

    return (
      <>
        <div className="projects-container">
          <div className="pagination-div">
            <button
              type="button"
              className="pagination-btn pg-left"
              onClick={this.handleClickPrev}
              disabled={currentPage === 1}
              style={{ marginRight: '1em' }}
            >
              <VscIcons.VscTriangleLeft
                size={40}
                style={{ color: '#b03b83' }}
              />
            </button>
          </div>
          {currentProjects.map((elem) => (
            <div key={elem.id} className="project-cards">
              <a href="#">
                <div className="project-number">
                  {elem.id}
                  .&nbsp;
                  {elem.name}
                </div>
              </a>
              <div>
                <div className="project-image">
                  <img
                    src={elem.image}
                    alt={elem.name}
                    style={{ width: '100%' }}
                  />
                </div>
                <div className="project-summary">
                  <span>
                    <b>SUMMARY:</b>
                  </span>
                  <p>{elem.summary}</p>
                    <b>BUILT WITH:</b>
                  <p>{elem.techAndTools}</p>
                </div>
              </div>
              <div className="card-btns-div">
                <button type="button" className="card-btns" onClick={() => window.open(elem.liveLink, '_blank')}>
                  LIVE-DEMO
                </button>
                <button type="button" className="card-btns" onClick={() => window.open(elem.sourceLink, '_blank')}>
                  SOURCE CODE
                </button>
              </div>
            </div>
          ))}
          <div className="pagination-div">
            <button
              type="button"
              className="pagination-btn"
              onClick={this.handleClickNext}
              disabled={
                currentPage === Math.ceil(myProjects.length / projectsPerPage)
              }
              style={{ marginLeft: '1em' }}
            >
              <VscIcons.VscTriangleRight
                size={40}
                style={{ color: '#b03b83' }}
              />
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default ProjectCards;
