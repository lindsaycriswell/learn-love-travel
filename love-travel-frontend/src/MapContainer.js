// THIS IS ALL THE GOOGLE MAPS STUFF RN

import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import React from "react";
// import { Link } from 'react-router-dom'

// other components
import Places from "./places";

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: "",
<<<<<<< HEAD
=======
      locations: []
>>>>>>> master
    };

    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/locations")
      .then(res => res.json())
      .then(json =>
        this.setState({
          locations: json
        })
      );
  }

  onMarkerClick = (googleProps, marker, e, location) => {
    this.setState({
      selectedPlace: location,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  };

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };


  render() {
    console.log(this.state.selectedPlace)
    return (
      <div>
        <div style={{ padding: "10px" }}>
          <Map
            google={this.props.google}
            onClick={this.onMapClicked}
            style={{ width: "70%", height: "80%", position: "relative" }}
            className={"map"}
            zoom={2}
          >
<<<<<<< HEAD
            <Marker
              onClick={this.onMarkerClick}
              title={"The marker`s title will appear as a tooltip."}
              name={"San Franciscio"}
              position={{ lat: 37.778519, lng: -122.40564 }}
            />

            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onInfoWindowClose}>
=======
            {this.state.locations.map(location => (
              <Marker
                key={location.id}
                onClick={(googleProps, marker, e) =>
                  this.onMarkerClick(googleProps, marker, e, location)
                }
                title={"The marker`s title will appear as a tooltip."}
                name={location.name}
                position={{
                  lat: location.latitude_coordinate,
                  lng: location.longitude_coordinate
                }}
              />
            ))}
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClick={this.testClick}
            >
>>>>>>> master
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
            </InfoWindow>
          </Map>
        </div>
<<<<<<< HEAD

        <div style={{ float: "right" }}>
          {this.state.selectedPlace ? <Places data={this.state.selectedPlace} />  : null}
        </div>

=======
        <div style={{ float: "right" }}>
          {this.state.selectedPlace ? "TEST" : null}
        </div>
>>>>>>> master
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDTnFckTcPidqCa5F9dWom4H_0hbJu9Nh0"
})(MapContainer);

// <Places data={this.state.selectedPlace} />
