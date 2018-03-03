

import Image from "../images/travel-balloons.png"

import React from "react";

let sectionStyle = {
  margin: 0,
  // width: "100vw",
  height: "100vh",
  backgroundSize : 'cover',
  backgroundImage: `url(${Image})`
};

const Home = props => {
  // var background = {backgroundSize : 'cover'}

  return(
    <div style={sectionStyle} />
  )
};

export default Home;
