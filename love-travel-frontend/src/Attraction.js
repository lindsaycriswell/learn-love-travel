import React from "react";
import { Link } from "react-router-dom";

const Attraction = props => {
  return (
    <div key={props.attraction.id} className="ui item">
      <Link
        to={`/attractions/${props.attraction.url_name}`}
        key={props.attraction.id}
      >
        <img
          alt={props.attraction.name}
          src={props.attraction.image_url}
          style={{float:"left"}}
          className="ui left aligned mini image"
        />
        <div className="middle aligned content">
          <div className="header">{props.attraction.name}</div>
        </div>
        </Link>
      </div>

  );
};

export default Attraction;
