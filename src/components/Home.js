import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import './styles/Home.css';
import './styles/icons.css';
import profilePic from '../images/profile-pic.jpg';

const Home = () => (
  <>
    <div className="home">
      <div className="main main-home">
        <div className="home-text welcome">
          <p className="home-pgraph">
            <b className="bold">
              HI THERE,
              <br />
              I&#39;m
              <span className="f-name"> Brian</span>
              <span className="l-name">Ludidi</span>
              ,
            </b>
            <br />
            a full-stack software developer from Cape Town, South Africa.
            <br />
            Let us talk, and see what I can do with your project.
          </p>
        </div>
        <div className="pics">
          <img src={profilePic} alt="profile" className="pic" />
        </div>
      </div>
    </div>
  </>
);

export default Home;
