import React from "react";
import ReviewList from "./ReviewList";
import { Link } from "react-router-dom";
import withAuth from "./hoc/withAuth";
import StarRatings from "react-star-ratings";

class AttractionDetail extends React.Component {
  render() {
    if (this.props.attraction) {
      return (
        <div>
          <h1 className="ui blue header" style={{ topMargin: "30px" }}>
            {this.props.attraction.name}
          </h1>
          <StarRatings
            rating={this.props.attraction.average_rating}
            starRatedColor="blue"
            starDimension="30px"
            starSpacing="4px"
          />;
          <Link
            style={{ marginTop: "10px" }}
            auth={this.props.auth}
            to={`/locations/${this.props.attraction.location.url_name}`}
            key={this.props.attraction.location.id}
          >
            <h3
              className="ui blue header"
              style={{ textDecoration: "underline" }}
            >
              Return to {this.props.attraction.location.name}
            </h3>
          </Link>
          <img src={this.props.attraction.image_url} alt="" />
          <h1 className="ui blue header">Reviews</h1>
          <ReviewList
            auth={this.props.auth}
            attraction={this.props.attraction}
          />
        </div>
      );
    } else {
      return <h1>Loading</h1>;
    }
  }
}

export default withAuth(AttractionDetail);
