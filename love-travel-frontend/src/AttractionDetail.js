import React from "react";
import ReviewList from "./ReviewList";
import { Link } from "react-router-dom";

class AttractionDetail extends React.Component {
  render() {
    return (
      <div>
        <h1 className="ui blue header">{this.props.attraction.name}</h1>
        <h2 className="ui header">
          Rating: {this.props.attraction.average_rating}/5 stars
        </h2>
        <Link
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
        <ReviewList attraction={this.props.attraction} />
      </div>
    );
  }
}

export default AttractionDetail;
