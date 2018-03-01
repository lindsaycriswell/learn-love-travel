

import Image from "../images/sunrise-myanmar.jpg"

import React from "react";

let sectionStyle = {
  margin: 0,
  width: "100%",
  height: "800px",
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
