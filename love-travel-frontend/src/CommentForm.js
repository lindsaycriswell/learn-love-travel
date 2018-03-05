import React from "react";

const CommentForm = props => {
  return (
    <div>
      <h3>Tell us about your trip to {props.location.name}!</h3>;
      <textarea
        type="text"
        name="content"
        value={props.formValue}
        onChange={props.handleChange}
      />
      <button onClick={props.handleClick}>Submit</button>
    </div>
  );
};

export default CommentForm;
