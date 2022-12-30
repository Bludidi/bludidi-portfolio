import React from 'react';
import './styles/Home.css';

const Home = () => (
  <>
    <div className="main main-home d-flex">
      <div className="logo-img" />
      <div className="home-text welcome">
        <p className="home-pgraph">
          HI THERE!
          <br />
          I&#39;m
          <span className="f-name"> Brian</span>
          <span className="l-name"> Ludidi</span>
        </p>
      </div>
    </div>
  </>
);

export default Home;
