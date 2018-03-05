import React from "react";

const API_KEY =
  "TKCYy6Mimtx1vZ4vgeFAhsYvYXVUguAnAnMfczNyXmbvedsiE19A9docLmU0jmpPU5NVSe6aPOIMlfvI4aG06Baq5DPjIKB97pTOU4Jc-OpGcR-JP40QF9CV4x6YWnYx";

const API_HOST = "https://api.yelp.com/v3/businesses/search";

class ReviewList extends React.Component {
  state = {
    reviews: []
  };

  // componentDidMount() {
  //   console.log(this.props.attraction.yelp_id);
  //   fetch(`${API_HOST}/${this.props.attraction.yelp_id}/reviews`, {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //       Authorization: `${API_KEY}`
  //     }
  //   })
  //     .then(res => res.json())
  //     .then(json => console.log(json));
  // }

  render() {
    return <div>Coming soon</div>;
  }
}

export default ReviewList;
