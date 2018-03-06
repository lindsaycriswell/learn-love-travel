import React from "react";

const CommentForm = props => {
  console.log(props);
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
      <button onClick={props.handlePost}>Submit</button>
    </div>
  );
};

export default CommentForm;
