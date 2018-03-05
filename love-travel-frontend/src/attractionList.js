import React from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import Attraction from "./Attraction";

class AttractionList extends React.Component {
  state = {
    redirect: false
  };

  addTrip = event => {
    event.preventDefault();
    this.renderTripPage(this.props.location);
  };

  renderTripPage = value => {
    this.setState({
      redirect: true
    });
    this.props.setCity(value);
  };

  render() {
    return (
      <div className="ui relaxed divided list" style={{ textAlign: "left" }}>
        {this.state.redirect ? <Redirect to="/makeTrip" /> : null}
        <Link
          to={`/locations/${this.props.location.url_name}`}
          key={this.props.location.id}
        >
          <h1>{this.props.cityName}</h1>
        </Link>
        <button onClick={this.addTrip}>Add To My Trips</button>
        {this.props.location.attractions.map(attraction => (
           <div className="ui item">
          <Attraction attraction={attraction} key={attraction.id} />
          </div>
        ))}
      </div>
    );
  }
}

export default AttractionList;

// <div class="ui items">
//   <div class="item">
//     <div class="ui small image">
//       <img src="/images/wireframe/image.png">
//     </div>
//     <div class="content">
//       <div class="header">
//         Top Aligned
//       </div>
//     </div>
//   </div>
