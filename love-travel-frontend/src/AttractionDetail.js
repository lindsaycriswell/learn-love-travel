import React from "react";
import ReviewList from "./ReviewList";

class AttractionDetail extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.attraction.name}</h1>
        <h1>{this.props.attraction.location.name}</h1>
        <h2>Rating: {this.props.attraction.average_rating}/5 stars</h2>
        <img src={this.props.attraction.image_url} alt="" />
        <h1>Reviews</h1>
        <ReviewList attraction={this.props.attraction} />
      </div>
    );
  }
}

export default AttractionDetail;
