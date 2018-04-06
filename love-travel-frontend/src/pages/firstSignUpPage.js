// react stuff
import React from "react";
import { Redirect } from "react-router";

// components

class FirstSignUpPage extends React.Component {
  state = {
    motto: "",
    bio: "",
    redirect: false
  };

  handleMotto = event => {
    this.setState({
      motto: event.target.value
    });
  };

  handleBio = event => {
    this.setState({
      bio: event.target.value
    });
  };

  addUserInfo = event => {
    event.preventDefault();
    this.postUserInfo(this.state.motto, this.state.bio);
  };

  postUserInfo = (motto, bio) => {
    let user = JSON.parse(localStorage.getItem("user"));
    console.log("in first sign up page", user);
    fetch(`http://localhost:3000/users/${user.id}`, {
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
      );
  };

  render() {
    return (
      <div className="ui grid">
        {this.state.redirect ? <Redirect to="/map" /> : null}
        <div className="three wide column" />
        <div className="right floated left aligned ten wide column">
          <h1>
            Welcome to Learn.Love.Travel {this.props.currentUser.username}!
          </h1>
          <h3>
            Tell us more about yourself or go ahead and start exploring by
            clicking on the map link in the nav bar on top
          </h3>
          <form className="ui form" onSubmit={this.addUserInfo}>
            <input
              className="ui small input"
              placeholder="Motto"
              value={this.state.motto}
              onInput={this.handleMotto}
            />
            <textarea
              placeholder="Tell Us About Yourself"
              value={this.state.bio}
              onInput={this.handleBio}
            />
            <button className="ui submit button">Submit</button>
          </form>
        </div>
        <div className="three wide column" />
      </div>
    );
  }
}

export default FirstSignUpPage;
