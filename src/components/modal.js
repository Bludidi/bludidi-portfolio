import React, { useState } from 'react';
import ProjectCards from './myProjects';

const MyModal = () => {
  const [showModal, setShowModal] = useState(false);

  const { myProjects } = ProjectCards;

  return (
    <div>
      <button type="button" onClick={() => setShowModal(true)}>Open Modal</button>
      {showModal && <Modal myProjects={myProjects} setShowModal={setShowModal} />}
      <ProjectCards myProjects={myProjects} />
    </div>
  );
};

function Modal({ myProjects, setShowModal }) {
  return (
    <div>
      <h1>My Projects</h1>
      <ul>
        {myProjects.map((project) => (
          <li key={project.id}>{project.id}</li>
        ))}
      </ul>
      <button type="button" onClick={() => setShowModal(false)}>Close Modal</button>
    </div>
  );
}

export default MyModal;
