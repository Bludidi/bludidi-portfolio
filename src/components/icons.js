import React from 'react';
import myImage1 from '../images/icons/github.png';
import myImage2 from '../images/icons/mail.png';
import myImage3 from '../images/icons/twitter.png';
import myImage4 from '../images/icons/linkedin.png';
import myImage5 from '../images/icons/angellist.png';
import myImage6 from '../images/icons/medium.png';
import './styles/icons.css';

const Icons = () => (
  <>
    <div className="social-icons">
      <a href="https://github.com/Bludidi">
        <img src={myImage1} alt="github icon" className="socials" />
      </a>
      <a href="https://github.com">
        <img src={myImage2} alt="mail icon" className="socials" />
      </a>
      <a href="https://twitter.com/BB_Ludidi">
        <img src={myImage3} alt="twitter icon" className="socials" />
      </a>
      <a href="https://www.linkedin.com/in/brian-ludidi">
        <img src={myImage4} alt="linkedin icon" className="socials" />
      </a>
      <a href="https://github.com">
        <img src={myImage5} alt="angellist icon" className="socials" />
      </a>
      <a href="https://github.com">
        <img src={myImage6} alt="medium icon" className="socials" />
      </a>
    </div>
  </>
);

export default Icons;
