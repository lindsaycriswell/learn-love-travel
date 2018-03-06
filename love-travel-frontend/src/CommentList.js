import React from "react";
import Comment from "./Comment";

const CommentList = props => {
  return (
    <div className="ui relaxed divided list">
      {props.comments.map(comment => (
        <div className="ui item">
          <Comment comment={comment} key={comment.id} />
        </div>
      ))}
    </div>
  );
};

export default CommentList;
