import React from "react";

const Photo = props => {
  return (
    <div>
      <img src={props.photo.urls.small} alt="" className="ui medium image" />
      <p>{props.photo.description}</p>
    </div>
  );
};

export default Photo;
