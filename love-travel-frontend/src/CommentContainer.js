import React from "react";
import CommentList from "./CommentList";

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
      location_id: this.props.location_id
    });
  }

  render() {
    return (
      <div>
        <CommentList comments={this.state.comments} />
      </div>
    );
  }
}

export default CommentContainer;
