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
    photos: [],
    url_path: ""
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

    // this.setState({
    //   url_path: [this.props.location.url_name]
    // });
    //
    // console.log(this.props.findLocationOnRefresh);
  }

  render() {
    // console.log(this.props.url.params.name);
    // console.log(this.state.url_path.length);

    return (
      <div>
        <div />
        <div className="ui fluid image">
          {this.state.photos[0] ? <Photo photo={this.state.photos[0]} /> : null}
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
                  <Attraction attraction={attraction} key={attraction.id} />
                ))}
              </div>
            ) : null}
          </div>
          <div className="two wide column" />
          <div className="five wide column">
            <div className="ui relaxed divided list">
              {this.props.location.comments.length > 0 ? (
                <div>
                  <h2 className="ui blue header">
                    Reviews of {this.props.location.name}
                  </h2>
                  <CommentContainer
                    comments={this.props.location.comments}
                    location={this.props.location}
                  />
                </div>
              ) : (
                <h2 className="ui blue header">
                  Be the first to review {this.props.location.name}
                </h2>
              )}{" "}
            </div>
          </div>
          <div className="two wide column" />
          <PhotoList photos={this.state.photos.slice(1, 8)} />
        </div>
      </div>
    );
  }
}

export default Location;
