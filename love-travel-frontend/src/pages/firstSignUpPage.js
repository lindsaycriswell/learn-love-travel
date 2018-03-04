
// react stuff
import React from 'react'
import {Redirect } from 'react-router'


// components


class FirstSignUpPage extends React.Component {
  state = {
    motto: '',
    bio: '',
    redirect: false
  }

  handleMotto = (event) => {
    this.setState({
      motto: event.target.value
    })
  }

  handleBio = (event) => {
    this.setState({
      bio: event.target.value
    })
  }

  addUserInfo = (event) => {
    event.preventDefault()
    this.postUserInfo(this.state.motto, this.state.bio)
  }

  postUserInfo = (motto, bio) => {
    fetch(`http://localhost:3000/users/${this.props.currentUser.id}`, {
     method: "PATCH",
     headers: {
       "Content-Type": "application/json"
     },
     body: JSON.stringify({
       motto: motto,
       bio: bio
     })
   })
   .then(res => res.json())
   .then(userJSON =>
     this.setState({
       redirect: true
     })
   )
  }

  render(){
    // console.log('in first sign up page', this.props.currentUser)
    return(
      <div className="ui grid">
        {this.state.redirect ?  <Redirect to='/welcome'/> : null}
        <div className="three wide column">
        </div>
        <div className="right floated left aligned ten wide column">
          <h1>Welcome to Travel Planner {this.props.currentUser.username}!</h1>
          <h3>Tell us more about yourself or go ahead and start exploring by clicking on the map link in the nav bar on top</h3>
          <form className="ui form" onSubmit={this.addUserInfo}>
            <input className="ui small input" placeholder="Motto" value={this.state.motto} onInput={this.handleMotto}/>
            <textarea placeholder="Tell Us About Yourself" value={this.state.bio} onInput={this.handleBio}/>
            <button className="ui submit button">Submit</button>
          </form>
        </div>
        <div className="three wide column">
        </div>
      </div>
    )
  }
}

export default FirstSignUpPage
