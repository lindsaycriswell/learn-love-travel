import React from "react";

class Comment extends React.Component {
  state = {
    reviewUser: {}
  };

  componentDidMount() {
    fetch(`http://localhost:3000/users/${this.props.comment.user_id}`)
      .then(res => res.json())
      .then(json =>
        this.setState({
          reviewUser: json
        })
      );
  }

  render() {
    return (
      <div>
        <h4>{this.state.reviewUser.username}:</h4>
        <p>{this.props.comment.content}</p>
      </div>
    );
  }
}

export default Comment;
