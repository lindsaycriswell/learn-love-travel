import React from "react";

// THIS IS JUST THE NAV BAR
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import SignUp from './pages/signUp'
// REACT COMPONENTS
// import About from './pages/about'
// import home from './pages/home'
// import

const NavBar = props => {
  return (
    <div className="ui blue inverted menu" style={{marginBottom: "0px"}}>
      <div className="header item">
        Learn. Love. Travel.
      </div>
      <div className= "item">
      <Link to={`/about`} >About Us</Link>
      </div>
      <div className="item">
      <Link to={`/map`}>Map</Link>
      </div>
      <div className="item">
      <Link to={`/yourTrips`}>Your Trips</Link>
      </div>
      <div className="right menu">
        <div className="item">
          <i className="suitcase icon"></i>
        </div>
        {props.currentUser ? <a onClick={props.logOut} className="ui item">Log Out</a> : <Link to={`/signUp`} className="ui item">Sign Up</Link>}
      </div>
    </div>
  );
};

export default NavBar;
