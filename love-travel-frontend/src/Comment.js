import React from "react";
import { Link } from "react-router-dom";

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
      <div className="ui item">
        <div className="content" style={{ margin: "5px" }}>
          <a className="header" style={{ textAlign: "left" }}>
            {this.state.reviewUser.username}
          </a>
          <div className="description" style={{ textAlign: "left" }}>
            {this.props.comment.content}
            {this.props.currentUser.id === this.state.reviewUser.id ? (
              <div>
                <a to={"edit"} style={{ float: "left" }}>
                  Edit
                </a>
                <a to={"delete"} style={{ float: "right" }}>
                  Delete
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Comment
