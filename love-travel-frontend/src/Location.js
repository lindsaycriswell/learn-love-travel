import React from "react";
import Attraction from "./Attraction";
import PhotoList from "./PhotoList";
import Photo from "./Photo";
import Unsplash from "unsplash-js";

// const unsplash = new Unsplash({
//   applicationId:
//     "129e1c37805baaa3c936aaea1cd984828281182dc4440f5e8406b421c0b6b0e4",
//   secret: "8f957a7929701b86d8365960b8830ded0cca2d0fcc8f7c0a3782f10a3a80b9b2",
//   callbackUrl: "urn:ietf:wg:oauth:2.0:oob"
// });

class Location extends React.Component {
  state = {
    photos: []
  };

  componentDidMount() {
    unsplash.search
      .photos(`${this.props.location.name}`)
      .then(res => res.json())
      .then(json =>
        this.setState({
          photos: json.results
        })
      );
  }

  render() {
    return (
      <div>
        <h1>{this.props.location.name}</h1>
        {this.state.photos[0] ? <Photo photo={this.state.photos[0]} /> : null}
        <div className="ui relaxed divided list">
          <h3>Popular Attractions</h3>
          {this.props.location.attractions.map(attraction => (
            <Attraction attraction={attraction} key={attraction.id} />
          ))}
        </div>
        <div>
          <PhotoList photos={this.state.photos.slice(1)} />
        </div>
      </div>
    );
  }
}

export default Location;
