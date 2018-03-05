import React from "react";
import Attraction from "./Attraction";
import PhotoList from "./PhotoList";
import Photo from "./Photo";
import CommentContainer from "./CommentContainer";
import Unsplash from "unsplash-js";

const unsplash = new Unsplash({
  applicationId:
    "129e1c37805baaa3c936aaea1cd984828281182dc4440f5e8406b421c0b6b0e4",
  secret: "8f957a7929701b86d8365960b8830ded0cca2d0fcc8f7c0a3782f10a3a80b9b2",
  callbackUrl: "urn:ietf:wg:oauth:2.0:oob"
});

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
    console.log(this.props.location.url_name);
    return (
      <div>
        <h1>{this.props.location.name}</h1>
        {this.state.photos[0] ? <Photo photo={this.state.photos[0]} /> : null}
        {this.props.location.attractions ? (
          <div className="ui relaxed divided list">
            <h2>Popular Attractions</h2>
            {this.props.location.attractions.map(attraction => (
              <Attraction attraction={attraction} key={attraction.id} />
            ))}
          </div>
        ) : null}
        <div>
          <PhotoList photos={this.state.photos.slice(1)} />
        </div>
        {this.props.location.comments.length > 0 ? (
          <div>
            <h2>Reviews of {this.props.location.name}</h2>
            <CommentContainer
              comments={this.props.location.comments}
              location_id={this.props.location.id}
            />
          </div>
        ) : (
          <h2>Be the first to review {this.props.location.name}</h2>
        )}
      </div>
    );
  }
}

export default Location;
