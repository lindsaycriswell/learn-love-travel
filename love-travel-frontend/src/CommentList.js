import React from "react";
import Comment from "./Comment";

const CommentList = props => {
  console.log(props);
  console.log(props.currentUser);
  return (
    <div className="ui relaxed divided list">
      {props.comments.map(comment => (
        <div className="ui item">
          <Comment
            comment={comment}
            key={comment.id}
            currentUser={props.currentUser}
          />
        </div>
      ))}
    </div>
  );
};

export default CommentList;
