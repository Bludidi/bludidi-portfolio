import React from 'react';
import * as GiArchiveIcon from 'react-icons/gi';
import * as FaIcons from 'react-icons/fa';
import * as BsIcons from 'react-icons/bs';
import { MdBuild } from 'react-icons/md';
import './styles/About.css';

const About = () => (
  <>
    <div className="mid-section about">
      <div className="banner">
        <GiArchiveIcon.GiArchiveResearch size={40} className="head-icon" />
        <h2>About Brian</h2>
      </div>
      <div className="line"><hr /></div>
      <br />
      <br />
      <div className="about-text">
        <p>
          I am currently enrolled at Microverse, a remote software development
          school that utilizes pair programming and real-world projects to teach
          students. Starting programming as a hobby in 2021, my passion for it
          quickly grew, leading me to seek a professional platform for learning.
          <br />
          <br />
          Despite having a non-programming background, I leveraged my past
          skills in
          {' '}
          <span className="f-name">
            <b>
              time management, communication, planning, organization, and
              attention to detail
            </b>
          </span>
          {' '}
          to facilitate smooth learning and adaptation.
          Throughout the curriculum, I have constructed numerous web
          applications using
          {' '}
          <span className="f-name"><b>JavaScript, React, Redux, Ruby, and Ruby on Rails</b></span>
          .
          My GitHub showcases these projects in detail.
          <br />
          <br />
          Alongside technical skills, I have honed collaboration, remote work
          best practices, teamwork, project development & management, and pair programming
          abilities. A mindset of continuous learning enables me to navigate the
          ever-changing technological landscape, fostering ongoing growth.
          Certified in
          {' '}
          <span className="f-name">
            <b>
              HTML/CSS, JavaScript, React & Redux, Ruby and Databases,
              Ruby on Rails
            </b>
          </span>
          , and Full Stack Capstone, I distinguish myself through
          my proactive adherence to ethics and best practices, dynamic team
          collaboration with accountability, willingness to learn and adapt, and
          ability to tackle complex problems outside my comfort zone.
          <br />
          <br />
          I am open to opportunities, collaborations, or projects where my
          skills and expertise can contribute to organizational success. Please
          don&apos;t hesitate to reach out to me at&nbsp;
          <a href="mailto:bludidi5@gmail.com" aria-label="Email"><span className="f-name"><b>Bludidi5@gmail.com</b></span></a>
          . I am excited to connect with like-minded
          professionals and explore new possibilities.
        </p>
      </div>
      <br />
      <br />
      <br />
      <div className="banner">
        <FaIcons.FaLightbulb size={40} className="head-icon" />
        <h2>Skills</h2>
      </div>
      <div className="line"><hr /></div>
      <br />
      {/* <br /> */}
      <div className="skills-div">
        <div className="skills-card">
          <div className="sub-header">
            <BsIcons.BsPersonLinesFill size={25} />
            <h3>Interpersonal Skills</h3>
          </div>
          <ul>
            <li>Attention to detail</li>
            <li>Analytical skills</li>
            <li>Communication</li>
            <li>Project planning</li>
            <li>Project management</li>
            <li>Problem Solving</li>
            <li>Leadership</li>
          </ul>
        </div>
        <div className="skills-card">
          <div className="sub-header">
            <FaIcons.FaBook />
            <h3>Industry Knowledge</h3>
          </div>
          <ul>
            <li>Front end development</li>
            <li>Back end development</li>
            <li>User Interface design</li>
            <li>Pair programming</li>
            <li>Programming best practices</li>
            <li>Development best practices</li>
            <li>Responsive web development</li>
            <li>Object Oriented Programming</li>
          </ul>
        </div>
        <div className="skills-card">
          <div className="sub-header">
            <MdBuild />
            <h3>Tools & Technologies</h3>
          </div>
          <ul>
            <li>Ruby on Rails (Back-end)</li>
            <li>React & Redux</li>
            <li>PostgreSQL</li>
            <li>CSS, SCSS & Bootstrap</li>
            <li>Git</li>
            <li>Node.js</li>
          </ul>
        </div>
      </div>
    </div>
  </>
);

export default About;
