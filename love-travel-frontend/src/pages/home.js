

// react stuff
import React from "react";
import Image from "../images/travel-balloons.png"

// import components
import { Link } from 'react-router-dom'

let sectionStyle = {
  margin: 0,
  // width: "100vw",
  height: "100vh",
  backgroundSize : 'cover',
  backgroundImage: `url(${Image})`
};

const Home = props => {

  return(
    <div style={sectionStyle} className="ui grid">
      <div className="four wide column">
      </div>
      <div className="four wide column">
        <h2 className="ui dividing header" style={{color: "#3f2674"}}>Sign In</h2>
        <form className="ui form">
          <input type="text" name="username" placeholder="Username" style={{backgroundColor: "rgba(52, 52, 52, 0.3)", border:"1px solid #3f2674"}}/>
          <input type="password" name="password" placeholder="Password" style={{backgroundColor: "rgba(52, 52, 52, 0.3)", border:"1px solid #3f2674"}}/>
          <div className="ui submit button">Submit</div>
        </form>
      </div>
      <div className="four wide column" style={{marginTop: "20px"}}>
        <h1 style={{color: "#3f2674"}}>Welcome to Travel Planner</h1>
        <Link to={`/signup`} style={{color: "#3f2674"}}>Click here to sign up!</Link>
      </div>
      <div className="eight wide column">
      </div>
    </div>
  )
};

export default Home;
