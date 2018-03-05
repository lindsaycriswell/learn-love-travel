import React from "react";
import Photo from "./Photo";

const PhotoList = props => {
  return (
    <div>
      {props.photos.map(photo => <Photo photo={photo} key={photo.id} />)}
    </div>
  );
};

export default PhotoList;
