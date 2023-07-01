import React from 'react';
import './styles/About.css';

const About = () => (
  <>
    <div className="mid-section about">
      <div className="banner">
        <h2>About Brian</h2>
      </div>
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
            time management, communication, planning, organization, and
            attention to detail
          </span>
          {' '}
          to facilitate smooth learning and adaptation.
          Throughout the curriculum, I have constructed numerous web
          applications using
          {' '}
          <span className="f-name">JavaScript, React, Redux, Ruby, and Ruby on Rails</span>
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
            HTML/CSS, JavaScript, React & Redux, Ruby and Databases,
            Ruby on Rails
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
          <a href="mailto:bludidi5@gmail.com" aria-label="Email"><span className="f-name">Bludidi5@gmail.com</span></a>
          . I am excited to connect with like-minded
          professionals and explore new possibilities.
        </p>
      </div>
    </div>
  </>
);

export default About;
