import React from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import withAuth from "./hoc/withAuth";

const CommentList = props => {
  return (
    <div>
      <div className="ui relaxed divided list">
        {props.comments.map(comment => (
          <div className="ui item" key={comment.id}>
            <Comment
              comment={comment}
              key={comment.id}
              currentUser={props.currentUser}
              editComment={props.editComment}
              deleteComment={props.deleteComment}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentList;
