import React from "react";
import Comment from "./Comment";

const CommentList = props => {
  console.log(props.comments);
  return (
    <div>
      <div className="ui relaxed divided list">
        {props.comments
          ? props.comments.map(comment => (
              <div className="ui item" key={comment.id}>
                <Comment
                  comment={comment}
                  key={comment.id}
                  currentUser={props.currentUser}
                  editComment={props.editComment}
                  deleteComment={props.deleteComment}
                />
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default CommentList;
