import React from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

class CommentContainer extends React.Component {
  state = {
    comments: [],
    user_id: "",
    location_id: null,
    content: "",
    editComment: false,
    commentId: null
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

  handleFetch = event => {
    event.preventDefault();
    if (this.state.editComment) {
      fetch(`http://localhost:3000/api/v1/comments/${this.state.commentId}`, {
        method: "PATCH",
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
            comments: [
              ...this.state.comments.filter(c => c.id !== json.id),
              json
            ],
            content: "",
            editComment: false,
            commentId: null
          })
        );
    } else {
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
    }
  };

  editComment = comment => {
    this.setState({
      content: comment.content,
      editComment: true,
      commentId: comment.id
    });
  };

  deleteComment = comment => {
    console.log(this.state.comments);
    let updatedComments = this.state.comments.find(c => c.id !== comment.id);
    this.setState({
      comments: updatedComments
    });
    console.log(updatedComments);
    //
    // fetch(`http://localhost:3000/api/v1/comments/${comment.id}`, {
    //   method: "DELETE"
    // });
  };

  render() {
    // console.log(this.state.comments);
    return (
      <div>
        <div>
          <CommentList
            comments={this.state.comments}
            currentUser={this.props.currentUser}
            editComment={this.editComment}
            deleteComment={this.deleteComment}
          />
        </div>
        <div>
          <CommentForm
            location={this.props.location}
            formValue={this.state.content}
            handleChange={this.handleChange}
            handleFetch={this.handleFetch}
          />
        </div>
      </div>
    );
  }
}

export default CommentContainer;
