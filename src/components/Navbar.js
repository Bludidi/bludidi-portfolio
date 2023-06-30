import { NavLink } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import logo from '../images/logo/bludidi3.png';
import './styles/Navbar.css';

const Navbar = () => (
  <nav className="navigation">
    <div className="logo-div">
      <img src={logo} alt="logo" className="logo" />
    </div>
    <NavLink
      to="/"
      exact
      className="d-flex nav-text link"
      activeClassName="active"
    >
      <AiIcons.AiFillHome size={30} />
      <span className="nav-link-name">HOME</span>
    </NavLink>
    <NavLink
      to="/Projects"
      className="d-flex nav-text link"
      activeClassName="active"
    >
      <FaIcons.FaRegFolderOpen size={30} />
      <span className="nav-link-name">PROJECTS</span>
    </NavLink>
    <NavLink
      to="/About"
      className="d-flex nav-text link"
      activeClassName="active"
    >
      <FaIcons.FaInfoCircle size={30} />
      <span className="nav-link-name">ABOUT</span>
    </NavLink>
    <NavLink
      to="/Contact"
      className="d-flex nav-text link"
      activeClassName="active"
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
    {/* <br /> */}
    <div className="my-socials">
      <a href="https://github.com/Bludidi" aria-label="GitHub"><FaIcons.FaGithub size={25} className="my-social-icons" /></a>
      <a href="https://twitter.com/@BB_Ludidi" aria-label="Twitter"><FaIcons.FaTwitter size={25} className="my-social-icons" /></a>
      <a href="https://linkedin.com/in/brian-ludidi" aria-label="LinkedIn"><AiIcons.AiOutlineLinkedin size={25} className="my-social-icons" /></a>
      <a href="mailto:bludidi5@gmail.com" aria-label="Email"><SiIcons.SiGmail size={25} className="my-social-icons" /></a>
    </div>
  </nav>
);

export default Navbar;
