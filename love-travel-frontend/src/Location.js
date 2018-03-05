import React from "react";
import Attraction from "./Attraction";
import Unsplash from "unsplash-js";

const unsplash = new Unsplash({
  applicationId:
    "129e1c37805baaa3c936aaea1cd984828281182dc4440f5e8406b421c0b6b0e4",
  secret: "8f957a7929701b86d8365960b8830ded0cca2d0fcc8f7c0a3782f10a3a80b9b2",
  callbackUrl: "urn:ietf:wg:oauth:2.0:oob"
});

class Location extends React.Component {
  componentDidMount() {
    unsplash.search
      .photos(`${this.props.location.name}`)
      .then(res => res.json())
      .then(json => console.log(json.results));
  }

  render() {
    return (
      <div>
        {console.log(this.props.location)}
        <h1>{this.props.location.name}</h1>
        <div className="ui relaxed divided list">
          <h3>Popular Attractions</h3>
          {this.props.location.attractions.map(attraction => (
            <Attraction attraction={attraction} key={attraction.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default Location;
