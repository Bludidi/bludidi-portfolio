import React, { Component } from 'react';
import myImage from './images/ProjectsImages/tdl.png';

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
          summary: '',
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
            <div key={elem.id} className="project-cards">
              <div className="project-number">
                Project:&nbsp;
                {elem.id}
              </div>
              <div>
                <h3 className="card-header">{elem.name}</h3>
                <img src={elem.image} alt={elem.name} />
                <p>{elem.summary}</p>
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
