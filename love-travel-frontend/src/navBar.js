import React from "react";

// THIS IS JUST THE NAV BAR
import { Link } from 'react-router-dom'

// REACT COMPONENTS
// import About from './pages/about'
// import home from './pages/home'
// import

const NavBar = props => {
  return (
    <div className="ui blue inverted menu" style={{marginBottom: "0px"}}>
      <div className="header item">
        <i className="heart icon"></i> Travel
      </div>
      <div className= "item">
      <Link to={`/about`} >About Us</Link>
      </div>
      <div className="item">
      <Link to={`/map`}>Map</Link>
      </div>
      <div className="right menu">
        <div className="item">
          <i className="suitcase icon"></i>
        </div>
        <a className="ui item">Sign Up</a>
      </div>
    </div>
  );
};

export default NavBar;
