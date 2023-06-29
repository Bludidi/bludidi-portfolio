import { NavLink } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import './styles/Navbar.css';

const Navbar = () => (
  <nav className="navigation">
    <NavLink
      to="/"
      exact
      className="d-flex nav-text link"
      activeClassName="active"
    >
      <AiIcons.AiFillHome className="icon" />
      <span className="nav-link-name">HOME</span>
    </NavLink>
    <NavLink
      to="/Projects"
      className="d-flex nav-text link"
      activeClassName="active"
    >
      <FaIcons.FaRegFolderOpen className="icon" />
      <span className="nav-link-name">PROJECTS</span>
    </NavLink>
    <NavLink
      to="/About"
      className="d-flex nav-text link"
      activeClassName="active"
    >
      <FaIcons.FaInfoCircle className="icon" />
      <span className="nav-link-name">ABOUT</span>
    </NavLink>
    <NavLink
      to="/Contact"
      className="d-flex nav-text link"
      activeClassName="active"
    >
      <AiIcons.AiOutlineMail className="icon" />
      <span className="nav-link-name">CONTACT</span>
    </NavLink>
  </nav>
);

export default Navbar;
