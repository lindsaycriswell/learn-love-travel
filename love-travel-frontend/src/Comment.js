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
    console.log(this.props.currentUser.id);
    console.log(this.state.reviewUser.id);

    return (
        <div className="ui item">
          <div className="content" style={{ margin: "5px" }}>
            <a className="header" style={{ textAlign: "left" }}>
              {this.state.reviewUser.username}
            </a>
            <div className="description" style={{ textAlign: "left" }}>
              {this.props.comment.content}
            </div>
            {this.props.currentUser.id === this.state.reviewUser.id ? (
              <div>
                <button class="mini ui button">Edit Comment</button>
                <button class="mini ui button">Delete Comment</button>
              </div>
            ) : null}
          </div>
        </div>
    );
  }
}

export default Comment;
