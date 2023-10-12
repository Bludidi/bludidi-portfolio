import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import './styles/mobile_nav.css';

const MobNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Navbar bg="light" expand="md" fixed="top" className="p-2 custom-navbar">
      <Navbar.Brand href="#home">BL</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </Navbar.Toggle>
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto p-3">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MobNav;
