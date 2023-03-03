import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import './styles/Home.css';
import './styles/icons.css';
import Icons from './icons';
import Footer from './footer';

const Home = () => (
  <>
    <div className="home">
      <Icons />
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
            a full-stack software developer from Cape Town, South Africa.
            <br />
            Let us talk, and see what I can do with your project.
          </p>
          <div className="pic" />
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default Home;
