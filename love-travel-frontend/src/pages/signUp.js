// react stuff
import React from "react";
import Image from "../images/sunrise-myanmar.jpg";
import { Redirect } from 'react-router'

// components

class SignUp extends React.Component {

  state={
    username: '',
    errors: [],
    redirect: false
  }

  handleUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }
  //
  // handlePassword = (event) => {
  //   this.setState({
  //     password: event.target.value
  //   })
  // }
  //
  // handlePasswordConfirmation = (event) => {
  //   this.setState({
  //     password_confirmation: event.target.value
  //   })
  // }

  addUser = (event) => {
    event.preventDefault()
    console.log('in the add user')
    this.fetchMakeUser(this.state.username)
  }

  fetchMakeUser = (username) => {
    fetch(`http://localhost:3000/users/`, {
     method: "POST",
     headers: {
       "Content-Type": "application/json"
     },
     body: JSON.stringify({
       username: username,
     })
   })
   .then(res => res.json())
   .then(userJSON => {
     if (userJSON.errors){
       this.setState({
         errors: userJSON.errors
       })
     } else {
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
      backgroundSize: "cover",
      backgroundImage: `url(${Image})`
    }

    return (
      <div style={sectionStyle} className="ui grid">
        {this.state.redirect ?  <Redirect to='/firstSignUpPage'/> : null}
        <div className="four wide column">
        </div>
        <div className="four wide column">
        </div>
        <div className="four wide column" style={{marginTop: "20px"}}>
          <h2 className="ui dividing header" style={{color: "##78224a"}}>Sign Up</h2>
          <form className="ui form" onSubmit={this.addUser}>
            <input type="text" name="username" placeholder="Username" style={{backgroundColor: "rgba(52, 52, 52, 0.3)", border:"1px solid ##78224a"}} value={this.state.username} onInput={this.handleUsername}/>
            <button className="ui submit button">Submit</button>
            {this.state.errors.length > 0 ?
              <div className="ui negative message">
              {this.state.errors.map(error => <p key={error}>{error}</p>)}
          </div> : null}
          </form>
        </div>
        <div className="four wide column">
        </div>
      </div>
    );
  }
};
//
// <input type="password" name="password" placeholder="Password" style={{backgroundColor: "rgba(52, 52, 52, 0.3)", border:"1px solid ##78224a"}} value={this.state.password} onInput={this.handlePassword}/>
// <input type="password" name="password_confirmation" placeholder="Password Confirmation" style={{backgroundColor: "rgba(52, 52, 52, 0.3)", border:"1px solid ##78224a"}} value={this.state.password_confirmation} onInput={this.handlePasswordConfirmation}/>

export default SignUp;
