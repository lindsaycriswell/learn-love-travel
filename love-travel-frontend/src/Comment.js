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
      <div className="ui item">
        <div className="content" style={{ margin: "5px" }}>
          <a className="header" style={{ textAlign: "left" }}>
            {this.state.reviewUser.username}
          </a>
          <div className="description" style={{ textAlign: "left" }}>
            {this.props.comment.content}
            <div>
              {this.props.currentUser.id === this.state.reviewUser.id ? (
                <div>
                  <a
                    to={"edit"}
                    style={{ float: "left" }}
                    onClick={() => this.props.editComment(this.props.comment)}
                  >
                    Edit
                  </a>
                  <a
                    to={"delete"}
                    style={{ float: "right" }}
                    onClick={() => this.props.deleteComment(this.props.comment)}
                  >
                    Delete
                  </a>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Comment;
