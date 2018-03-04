import React from "react";

import { Link } from "react-router-dom";

class AttractionList extends React.Component {
  state = {};
  render() {
    return (
      <div className="ui relaxed divided list">
        <Link
          to={`/locations/${this.props.data.url_name}`}
          key={this.props.data.id}
        >
          <h1>{this.props.cityName}</h1>
        </Link>

        <button>Add To My Trips</button>
        {this.props.data.attractions.map(attraction => (
          <div className="item" key={attraction.id}>
            <img
              src={attraction.image_url}
              alt=""
              className="ui left aligned mini image"
            />
            <div className="content">
              <div className="description">{attraction.name}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default AttractionList;

// style={{height: "20px", width: "20px"}}
