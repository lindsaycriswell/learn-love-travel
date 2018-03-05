import React from "react";
import Attraction from "./Attraction";

const Location = props => {
  return (
    <div>
      {console.log(props)}
      <h1>{props.location.name}</h1>
      <div className="ui relaxed divided list">
        <h3>Popular Attractions</h3>
        {props.location.attractions.map(attraction => (
          <Attraction attraction={attraction} key={attraction.id} />
        ))}
      </div>
    </div>
  );
};

export default Location;
