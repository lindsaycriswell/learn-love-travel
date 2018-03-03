// react stuff
import React from "react";
import Image from "../images/sunrise-myanmar.jpg";

let sectionStyle = {
  margin: 0,
  // width: "100vw",
  height: "100vh",
  backgroundSize: "cover",
  backgroundImage: `url(${Image})`
};

const SignUp = props => {
  return (
    <div style={sectionStyle} className="ui grid">
      <div className="four wide column">
      </div>
      <div className="four wide column">
      </div>
      <div className="four wide column">
      <h2 className="ui dividing header" style={{color: "##78224a"}}>Sign Up</h2>
      <form className="ui form">
        <input type="text" name="username" placeholder="Username" style={{backgroundColor: "rgba(52, 52, 52, 0.3)", border:"1px solid ##78224a"}}/>
        <input type="password" name="password" placeholder="Password" style={{backgroundColor: "rgba(52, 52, 52, 0.3)", border:"1px solid ##78224a"}}/>
        <input type="password" name="password-confirmation" placeholder="Password Confirmation" style={{backgroundColor: "rgba(52, 52, 52, 0.3)", border:"1px solid ##78224a"}}/>
        <div className="ui submit button">Submit</div>
      </form>
      </div>
      <div className="four wide column">
      </div>
    </div>
  );
};

export default SignUp;
