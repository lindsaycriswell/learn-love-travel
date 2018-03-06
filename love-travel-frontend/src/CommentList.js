import React from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

class CommentList extends React.Component {
  render() {
    console.log(this.props.location);
    return (
      <div>
        <div className="ui relaxed divided list">
          {this.props.comments.map(comment => (
            <div className="ui item" key={comment.id}>
              <Comment
                comment={comment}
                key={comment.id}
                currentUser={this.props.currentUser}
              />
            </div>
          ))}
        </div>
        <div>
          <CommentForm
            location={this.props.location}
            content={this.props.content}
            handleChange={this.props.handleChange}
            handlePost={this.props.handlePost}
            handlePatch={this.props.handlePatch}
            editClicked={this.props.editClicked}
          />
        </div>
      </div>
    );
  }
}

export default CommentList;
