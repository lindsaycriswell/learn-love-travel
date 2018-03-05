

// react stuff
import React from "react";
import Image from "../images/travel-balloons.png"
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'

// import components
// import UserApi from '../adapters/userApi'

class Home extends React.Component {

  state = {
    username: '',
    invalid: '',
    redirect: false
  }

  handleUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  checkUser = (event) => {
    event.preventDefault()
    console.log(this.state.username)
    this.fetchCheckUser(this.state.username)
  }

  fetchCheckUser = (username) => {
    fetch('http://localhost:3000/checkuser', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username
      })
    })
    .then(res => res.json())
    .then(userJSON => {
      if (userJSON.message === "Invalid") {
        this.setState({
          invalid: userJSON.message
        })
      } else {
        // render the new shit here
        this.props.setCurrentUser(userJSON)
        this.setState({
          redirect: true
        })
      }
    })
  }

render(){
  let sectionStyle = {
    margin: 0,
    // width: "100vw",
    height: "100vh",
    backgroundSize : 'cover',
    backgroundImage: `url(${Image})`
  };

  return(
    <div style={sectionStyle} className="ui grid">
      {this.state.redirect ?  <Redirect to='/welcome'/> : null}
      <div className="three wide column">
      </div>
      <div className="four wide column">
        <h2 className="ui dividing header" style={{color: "#3f2674", marginTop: "20px"}}>Sign In</h2>
        <form className="ui form" onSubmit={this.checkUser}>
          <input type="text" name="username" placeholder="Username" onChange={this.handleUsername} value={this.state.username} style={{backgroundColor: "rgba(52, 52, 52, 0.3)", border:"1px solid #3f2674"}}/>
          <button className="ui submit button">Submit</button>
        </form>
        {this.state.invalid ?
          <div className="ui negative message">
          <p>Incorrect Username/Password</p>
      </div> : null}
      </div>
      <div className="four wide column" style={{marginTop: "20px"}}>
        <h1 style={{color: "#3f2674"}}>Welcome to Travel Planner</h1>
        <Link to={`/signup`} className="ui header" style={{color: "#3f2674"}}>Click here to sign up!</Link>
      </div>
      <div className="eight wide column">
      </div>
    </div>
  )
}

};

// <input type="password" name="password" placeholder="Password" style={{backgroundColor: "rgba(52, 52, 52, 0.3)", border:"1px solid #3f2674"}}/>

export default Home;
