import React from "react";
import withAuth from "./hoc/withAuth";

const CommentForm = props => {
  return (
    <div>
      <h3 className="ui blue header">
        Tell us about your trip to {props.location.name}!
      </h3>
      <textarea
        type="text"
        name="content"
        value={props.formValue}
        onChange={props.handleChange}
      />
      <button onClick={props.handleFetch}>Submit</button>
    </div>
  );
};

export default CommentForm;
