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
      <div className= "ui item">
      <Link to={`/about`} >About Us</Link>
      </div>
      {props.currentUser ?
        <React.Fragment>
          <Link to={`/map`} className="ui item" >Map</Link>
          <Link to={`/yourTrips`} className="ui item" >Your Trips</Link>
        </React.Fragment>
        : null }
      <div className="right menu">
        <div className="ui item">
          <i className="suitcase icon"></i>
        </div>
        {props.currentUser ?
          <React.Fragment>
          <Link to={`/users/${props.currentUser.id}`} className="ui item">{props.currentUser.username}</Link>
          <a onClick={props.logOut} className="ui item">Log Out</a>
          </React.Fragment>
          : <Link to={`/signUp`} className="ui item">Sign Up</Link>
        }
      </div>
    </div>
  );
};

export default NavBar;
