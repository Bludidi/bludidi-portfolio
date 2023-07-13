import React from 'react';
import * as AiIcons from 'react-icons/ai';
import '@fortawesome/fontawesome-free/css/all.css';
import './styles/Home.css';
import './styles/icons.css';
import profilePic1 from '../images/profile-images/bl-profile-bw-nb.png';
import profilePic2 from '../images/profile-images/bl-profile-color-nb.png';

const Home = () => (
  <>
    <div className="home">
      <div className="banner">
        <AiIcons.AiOutlineUser size={40} className="head-icon" />
        <h2>Welcome to Brian&apos;s Portfolio</h2>
      </div>
      <div className="line">
        <hr />
      </div>
      <br />
      <br />
      <div className="main main-home">
        <div className="home-text welcome">
          <p className="home-pgraph">
            <b className="bold">
              HI THERE,
              <br />
              I&#39;m
              {' '}
              <span className="f-name">Brian</span>
              <span className="l-name">Ludidi</span>
              ,
            </b>
            <br />
            a budding
            {' '}
            <span className="f-name">Full-stack Developer</span>
            {' '}
            based in Cape Town, South Africa. Passionate about coding and
            problem-solving, I&apos;m eager to bring my fresh perspective and
            enthusiasm to your projects.
            <br />
            <br />
            Let&apos;s connect and explore how I can contribute to your
            projects. Looking forward to chatting with you.
          </p>
        </div>
        <div className="pics">
          <img src={profilePic1} alt="profile" className="pic" />
          <img src={profilePic2} alt="profile" className="pic2" />
        </div>
      </div>
    </div>
  </>
);

export default Home;
