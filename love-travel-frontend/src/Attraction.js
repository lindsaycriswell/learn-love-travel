import React from "react";
import { Link } from "react-router-dom";

const Attraction = props => {
  return (
    <Link
      to={`/attractions/${props.attraction.url_name}`}
      key={props.attraction.id}
    >
      <div key={props.attraction.id} className="item">
        <img
          alt={props.attraction.name}
          src={props.attraction.image_url}
          className="ui left aligned mini image"
        />
        <div className="middle aligned content">
          <div className="header">{props.attraction.name}</div>
        </div>
      </div>
    </Link>
  );
};

export default Attraction;
