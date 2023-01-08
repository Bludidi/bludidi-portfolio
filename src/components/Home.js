import React from 'react';
import Footer from './footer';
import './styles/Home.css';

const Home = () => (
  <>
    <div className="home">
      <ul className="socials">
        <li><a href="Home">T</a></li>
        <li><a href="Projects">G</a></li>
        <li><a href="About">M</a></li>
        <li><a href="Contact">A</a></li>
      </ul>
      <div className="main main-home d-flex">
        <div className="logo-img" />
        <div className="home-text welcome">
          <p className="home-pgraph">
            <b className="bold">
              HI THERE,
              <br />
              I&#39;m
              <span className="f-name"> Brian</span>
              <span className="l-name">Ludidi</span>
              ,
            </b>
            <br />
            a Web Developer from Cape Town, South Africa.
          </p>
          <div className="pic" />
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default Home;
