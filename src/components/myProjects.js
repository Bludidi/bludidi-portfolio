/* eslint-disable */

import React, { Component } from 'react';
import myImage from '../images/ProjectsImages/TODO.png';
import myImage1 from '../images/ProjectsImages/crypto_home.png';
import myImage2 from '../images/ProjectsImages/leaderboard.png';
import myImage3 from '../images/ProjectsImages/iBudget.png';
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
          techAndTools: [],
          liveLink: '',
          sourceLink: '',
          complexity: '',
        },
        {
          id: 2,
          name: 'CRYPTO HOME',
          affiliation: 'Microverse project',
          image: myImage1,
          summary:
            'CRYPTO HOME is a web based app built with React-Redux and is using CoinApp API to give data about crypto currencies.',
          fullDescription: '',
          techAndTools: [],
          liveLink: '',
          sourceLink: '',
          complexity: '',
        },
        {
          id: 3,
          name: "Leaderboard",
          affiliation: 'Microverse project',
          image: myImage2,
          summary:
            "Space Traveller's is a website where a user can reserve a rocket or dragon, they can also join missions. All of the data present in the site is from SpaceX API.",
          fullDescription: '',
          techAndTools: [],
          liveLink: '',
          sourceLink: '',
          complexity: '',
        },
        {
          id: 4,
          name: 'To-Do List',
          affiliation: 'Microverse project',
          image: myImage,
          summary:
            'This app helps users to keep track of daily tasks. Users are able to add, edit and remove tasks.',
          fullDescription: '',
          techAndTools: [],
          liveLink: '',
          sourceLink: '',
          complexity: '',
        },
        {
          id: 5,
          name: 'CRYPTO HOME',
          affiliation: 'Microverse project',
          image: myImage1,
          summary:
            'CRYPTO HOME is a web based app built with React-Redux and is using CoinApp API to give data about crypto currencies.',
          fullDescription: '',
          techAndTools: [],
          liveLink: '',
          sourceLink: '',
          complexity: '',
        },
        {
          id: 6,
          name: "Space Traveller's Hub",
          affiliation: 'Microverse project',
          image: myImage2,
          summary:
            "Space Traveller's is a website where a user can reserve a rocket or dragon, they can also join missions. All of the data present in the site is from SpaceX API.",
          fullDescription: '',
          techAndTools: [],
          liveLink: '',
          sourceLink: '',
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
      {/* <div><h2>My Projects</h2></div> */}
      <div className="projects-container">
      <div className="pagination-div"><button
            type="button"
            className="pagination-btn"
            onClick={this.handleClickPrev}
            disabled={currentPage === 1}
            style={{ marginRight: '1em'}}
          >
            <VscIcons.VscTriangleLeft size={40} style={{ color: '#b03b83' }} />
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
                  <b>DESCRIPTION:</b>
                </span>
                <p>{elem.summary}</p>
              </div>
            </div>
            <div className="card-btns-div">
              <button type="button" className="card-btns">
                LIVE-DEMO
              </button>
              <button type="button" className="card-btns">
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
            style={{ marginLeft: '1em'}}
          >
            <VscIcons.VscTriangleRight size={40} style={{ color: '#b03b83' }} />
          </button>
        </div>
      </div>
      </>
    );
  }
}

export default ProjectCards;
