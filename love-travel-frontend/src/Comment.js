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
      <div className="ui relaxed divided list">
        <div className="item">
          <div className="content" style={{ margin: "5px" }}>
            <a className="header" style={{ textAlign: "left" }}>
              {this.state.reviewUser.username}
            </a>
            <div className="description" style={{ textAlign: "left" }}>
              {this.props.comment.content}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Comment;
