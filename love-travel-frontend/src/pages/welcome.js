
import React from 'react'
import withAuth from '../hoc/withAuth'


import Image from '../images/nyc_skyline.jpg'
const Welcome = (props) => {

  let sectionStyle = {
    margin: 0,
    // width: "100vw",
    height: "50vh",
    backgroundSize: "cover",
    backgroundImage: `url(${Image})`
  }

  let user = JSON.parse(localStorage.getItem("user"))

  return(
    <div style={sectionStyle} className="ui grid">
      <div className="two wide column"></div>
      <div className="eight wide column" style={{textAlign: "left"}}>
      <h1>Welcome {user.username}!</h1>
      </div>
    </div>
  )
}

// let user = JSON.parse(localStorage.getItem("user"))
// console.log(user)

export default withAuth(Welcome)
