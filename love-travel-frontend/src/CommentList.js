import React from "react";
import Comment from "./Comment";

const CommentList = props => {
  console.log(props);
  console.log(props.currentUser);
  return (
    <div>
      {props.comments.map(comment => (
        <Comment
          comment={comment}
          key={comment.id}
          currentUser={props.currentUser}
        />
      ))}
    </div>
  );
};

export default CommentList;
