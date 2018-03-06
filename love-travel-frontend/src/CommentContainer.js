import React from "react";
import CommentList from "./CommentList";

class CommentContainer extends React.Component {
  state = {
    comments: [],
    user_id: "",
    location_id: null,
    content: "",
    editClicked: false
  };

  componentDidMount() {
    this.setState({
      comments: [...this.props.comments],
      location_id: this.props.location.id,
      user_id: this.props.currentUser.id
    });
  }

  handleChange = event => {
    this.setState({
      content: [event.target.value]
    });
  };

  handlePost = event => {
    event.preventDefault();
    fetch("http://localhost:3000/api/v1/comments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Accepts: "application/json"
      },
      body: JSON.stringify({
        user_id: this.state.user_id,
        location_id: this.state.location_id,
        content: this.state.content.toString()
      })
    })
      .then(res => res.json())
      .then(json =>
        this.setState({
          comments: [...this.state.comments, json],
          content: ""
        })
      );
  };

  render() {
    return (
      <div>
        <CommentList
          comments={this.state.comments}
          currentUser={this.props.currentUser}
          location={this.props.location}
          content={this.state.content}
          handleChange={this.handleChange}
          handlePost={this.handlePost}
          handlePatch={this.handlePatch}
          editClicked={this.state.editClicked}
        />
      </div>
    );
  }
}

export default CommentContainer;
