import React from "react";
import Photo from "./Photo";

const PhotoList = props => {
  const sortedPhotos = props.photos.sort(function(a, b) {
    let heightA = a.height;
    let heightB = b.height;
    if (heightA < heightB) {
      return -1;
    }
    if (heightA > heightB) {
      return 1;
    }
    return 0;
  });

  return (
    <div className="ui medium images">
      <h1 className="ui blue header">Photo Gallery</h1>
      {sortedPhotos.map(photo => <Photo photo={photo} key={photo.id} />)}
    </div>
  );
};

export default PhotoList;
