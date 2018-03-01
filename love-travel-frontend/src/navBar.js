import React from "react";

// THIS IS JUST THE NAV BAR
import { Link } from 'react-router-dom'

// REACT COMPONENTS
// import About from './pages/about'
// import home from './pages/home'
// import

const NavBar = props => {
  return (
    <div class="ui teal inverted menu">
      <div class="header item">
        <i class="heart icon"></i> Travel
      </div>
      <div className= "item">
      <Link to={`/about`} >About Us</Link>
      </div>
      <div className="item">
      <Link to={`/map`}>Map</Link>
      </div>
      <div class="right menu">
        <div class="item">
          <i className="suitcase icon"></i>
        </div>
        <a class="ui item">Logout</a>
      </div>
    </div>
  );
};

export default NavBar;
