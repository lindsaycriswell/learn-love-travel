import React from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

class CommentContainer extends React.Component {
  state = {
    comments: [],
    user_id: 1,
    location_id: null,
    content: ""
  };

  componentDidMount() {
    this.setState({
      comments: [...this.props.comments],
      location_id: this.props.location.id
    });
  }

  handleChange = event => {
    this.setState({
      content: [event.target.value]
    });
  };

  handleClick = event => {
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
        <div>
          <CommentList comments={this.state.comments} />
        </div>
        <div>
          <CommentForm
            location={this.props.location}
            formValue={this.state.content}
            handleChange={this.handleChange}
            handleClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
}

export default CommentContainer;
