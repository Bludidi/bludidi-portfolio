import { NavLink } from 'react-router-dom';
import './styles/Navbar.css';

const Navbar = () => (
  <header className="top-section d-flex">
    <nav className="navigation">
      <NavLink>
        <span className="bbl">BBL</span>
      </NavLink>
      <NavLink to="/" className="d-flex nav-text link">
        Home
      </NavLink>
      <NavLink to="/Projects" className="d-flex nav-text link">
        Projects
      </NavLink>
      <NavLink to="/About" className="d-flex nav-text link">
        About
      </NavLink>
      <NavLink to="/Contact" className="d-flex nav-text link">
        Contact
      </NavLink>
    </nav>
  </header>
);

export default Navbar;
