import { NavLink } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import Socials from './socials';
import logo from '../images/logo/bludidi3.png';
import './styles/Navbar.css';

const Navbar = () => {
  const handleSmoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navigation">
      <div className="logo-div">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <NavLink
        to="/"
        exact
        className="d-flex nav-text link"
        activeClassName="active"
        onClick={() => handleSmoothScroll('home')}
      >
        <AiIcons.AiFillHome size={30} />
        <span className="nav-link-name">HOME</span>
      </NavLink>
      <NavLink
        to="/projects"
        className="d-flex nav-text link"
        activeClassName="active"
        onClick={() => handleSmoothScroll('projects')}
      >
        <FaIcons.FaRegFolderOpen size={30} />
        <span className="nav-link-name">PROJECTS</span>
      </NavLink>
      <NavLink
        to="/About"
        className="d-flex nav-text link"
        activeClassName="active"
        onClick={() => handleSmoothScroll('about')}
      >
        <FaIcons.FaInfoCircle size={30} />
        <span className="nav-link-name">ABOUT</span>
      </NavLink>
      <NavLink
        to="/Contact"
        className="d-flex nav-text link"
        activeClassName="active"
        onClick={() => handleSmoothScroll('contact')}
      >
        <AiIcons.AiOutlineMail size={30} />
        <span className="nav-link-name">CONTACT</span>
      </NavLink>
      <br />
      <div style={{ textAlign: 'center', color: '#fff' }}>
        <hr />
        <em>My Socials</em>
        <hr />
      </div>
      <Socials />
    </nav>
  );
};

export default Navbar;
