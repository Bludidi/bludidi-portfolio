import React, { Component } from 'react';

class ProjectCards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myProjects: [
        {
          id: 1,
          name: 'My To-Do-List',
          affiliation: 'Microverse project',
          image: '',
          summary: '',
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
      <div>
        {
          myProjects.map((elem) => (
            <div key={elem.id}>
              <h3>{elem.name}</h3>
              <span>{elem.affiliation}</span>
              {elem.image}
              <span>{elem.complexity}</span>
              <p>{elem.summary}</p>
              <button type="button">{elem.liveLink}</button>
              <button type="button">{elem.sourceLink}</button>
            </div>
          ))
        }
      </div>
    );
  }
}

export default ProjectCards;
