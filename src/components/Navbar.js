import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <header className="top-section d-flex">
    <nav>
      <NavLink to="/" className="d-flex nav-text">Home</NavLink>
      <NavLink to="/Projects" className="d-flex nav-text">Projects</NavLink>
      <NavLink to="/About" className="d-flex nav-text">About</NavLink>
      <NavLink to="/Contact" className="d-flex nav-text">Contact Me</NavLink>
    </nav>
  </header>
);

export default Navbar;
