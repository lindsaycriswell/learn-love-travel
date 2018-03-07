import React from "react";
import Attraction from "./Attraction";
import PhotoList from "./PhotoList";
import Photo from "./Photo";
import CommentContainer from "./CommentContainer";
import Unsplash from "unsplash-js";
import withAuth from './hoc/withAuth'


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

  getPhotos = () => {
    unsplash.search
      .photos(`${this.props.location.name}`)
      .then(res => res.json())
      .then(json =>
        this.setState({
          photos: json.results
        })
      );
  };

  render() {
    if (this.props.location) {
      // Comment out if over API limit
      this.state.photos.length ? null : this.getPhotos();

      return (
        <div>
          <div />
          <div className="ui fluid image">
            {this.state.photos[0] ? (
              <Photo photo={this.state.photos[0]} />
            ) : null}
          </div>
          <div className="ui huge header">
            <h1 className="ui blue header">{this.props.location.name}</h1>
          </div>

          <div className="ui padded grid">
            <div className="two wide column" />
            <div className="five wide column">
              {this.props.location.attractions ? (
                <div
                  className="ui relaxed divided list"
                  style={{ textAlign: "left" }}
                >
                  <h2 className="ui blue header">Popular Attractions</h2>
                  {this.props.location.attractions.map(attraction => (
                    <Attraction
                      auth={this.props.auth}
                      attraction={attraction}
                      key={attraction.id}
                    />
                  ))}
                </div>
              ) : null}
            </div>
            <div className="two wide column" />
            <div className="five wide column">
              <div>
                <div>
                  <h2 className="ui blue header">
                    Reviews of {this.props.location.name}
                  </h2>
                  <CommentContainer
                    comments={this.props.location.comments}
                    location={this.props.location}
                    currentUser={this.props.currentUser}
                  />
                </div>
              </div>
            </div>
            <div className="two wide column" />
            <PhotoList photos={this.state.photos.slice(1, 4)} />
          </div>
        </div>
      );
    } else {
      return <h1>Loading</h1>;
    }
  }
}

export default withAuth(Location)
