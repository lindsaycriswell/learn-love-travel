
import React from 'react'

import Image from '../images/nyc_skyline.jpg'
const Welcome = (props) => {
  let sectionStyle = {
    margin: 0,
    // width: "100vw",
    height: "50vh",
    backgroundSize: "cover",
    backgroundImage: `url(${Image})`
  }
  return(
    <div style={sectionStyle} className="ui grid">
      <div className="two wide column"></div>
      <div className="eight wide column" style={{textAlign: "left"}}>
      <h1>Welcome {props.currentUser.username}!</h1>
      </div>
    </div>
  )
}

export default Welcome
