import React from "react";
import { Link } from "react-router-dom";
// import withAuth from "./hoc/withAuth";
import StarRatings from "react-star-ratings";

const Attraction = props => {
  console.log(props.attraction.average_rating);
  return (
    <div auth={props.auth} key={props.attraction.id} className="ui item">
      <Link
        auth={props.auth}
        to={`/attractions/${props.attraction.url_name}`}
        key={props.attraction.id}
      >
        <img
          alt={props.attraction.name}
          src={props.attraction.image_url}
          style={{ float: "left" }}
          className="ui left aligned mini image"
        />
        <div className="middle aligned content">
          <div
            className="header"
            style={{ color: "RGB(0, 128, 215)", textDecoration: "underline" }}
          >
            {props.attraction.name}
          </div>
        </div>
      </Link>
      <StarRatings
        rating={props.attraction.average_rating}
        starDimension="12px"
        starSpacing="2px"
        starRatedColor="blue"
      />
    </div>
  );
};

export default Attraction;
