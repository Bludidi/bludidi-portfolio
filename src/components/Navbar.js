import { NavLink } from 'react-router-dom';
import './styles/Navbar.css';

const Navbar = () => (
  <header className="top-section d-flex">
    <nav className="navigation">
      <span className="d-flex nav-text">
        <span className="bbl">&lt;BL /&gt;</span>
      </span>
      <NavLink to="/" exact className="d-flex nav-text link" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/Projects" className="d-flex nav-text link" activeClassName="active">
        Projects
      </NavLink>
      <NavLink to="/About" className="d-flex nav-text link" activeClassName="active">
        About
      </NavLink>
      <NavLink to="/Contact" className="d-flex nav-text link" activeClassName="active">
        Contact
      </NavLink>
    </nav>
  </header>
);

export default Navbar;
