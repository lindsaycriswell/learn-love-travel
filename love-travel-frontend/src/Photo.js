import React from "react";

const Photo = props => {
  return <img src={props.photo.urls.raw} alt="" />;
};

export default Photo;
