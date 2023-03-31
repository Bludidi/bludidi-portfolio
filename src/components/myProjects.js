/* eslint-disable */

import React, { Component } from 'react';
import myImage from '../images/ProjectsImages/tdl.png';
import myImage1 from '../images/ProjectsImages/pc2.png';
import myImage2 from '../images/ProjectsImages/pc3.png';

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
          summary: 'This app helps users to keep track of daily tasks. Users are able to add, edit and remove tasks.',
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
          summary: 'CRYPTO HOME is a web based app built with React-Redux and is using CoinApp API to give data about crypto currencies.',
          fullDescription: '',
          techAndTools: [],
          liveLink: '',
          sourceLink: '',
          complexity: '',
        },
        {
          id: 3,
          name: "Space Traveller's Hub",
          affiliation: 'Microverse project',
          image: myImage2,
          summary: "Space Traveller's is a website where a user can reserve a rocket or dragon, they can also join missions. All of the data present in the site is from SpaceX API.",
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
          summary: 'This app helps users to keep track of daily tasks. Users are able to add, edit and remove tasks.',
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
          summary: 'CRYPTO HOME is a web based app built with React-Redux and is using CoinApp API to give data about crypto currencies.',
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
          summary: "Space Traveller's is a website where a user can reserve a rocket or dragon, they can also join missions. All of the data present in the site is from SpaceX API.",
          fullDescription: '',
          techAndTools: [],
          liveLink: '',
          sourceLink: '',
          complexity: '',
        },
      ],
    };
  }

  render() {
    const { myProjects } = this.state;

    return (
      <div className="projects-container">
        {
          myProjects.map((elem) => (
            <div key={elem.index} className="project-cards">
              <a href="#"><div className="project-number">
                {elem.id}
                .&nbsp;
                {elem.name}
              </div></a>
              <div>
                <div>
                  <a href="#"><img src={elem.image} alt={elem.name} className="project-image" /></a>
                </div>
                <div className="project-summary">
                  <span><b>Summary:</b></span>
                  <p>{elem.summary}</p>
                </div>
                <br />
              </div>
              <div className="card-btns-div">
                <button type="button" className="card-btns">Live</button>
                <button type="button" className="card-btns">Source</button>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

export default ProjectCards;
