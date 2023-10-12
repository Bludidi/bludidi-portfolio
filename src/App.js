import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import MobNav from './components/mobile_nav';
import './App.css';

const App = () => (
  <>
    <div className="app">
      <MobNav />
      <div className="view-port">
        <div className="nav-wrapper vp-content">
          <Navbar />
        </div>
        <div className="content-wrapper vp-content">
          <Home />
          <Projects />
          <About />
          <Contact />
        </div>
      </div>
    </div>
  </>
);

export default App;
