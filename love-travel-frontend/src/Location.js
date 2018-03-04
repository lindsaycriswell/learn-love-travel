import React from "react";

const Location = props => {
  return (
    <div>
      {console.log(props)}
      <h1>{props.location.name}</h1>
    </div>
  );
};

export default Location;
