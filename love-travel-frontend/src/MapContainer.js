// THIS IS ALL THE GOOGLE MAPS STUFF RN

import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import React from "react";

// other components

import AttractionList from "./attractionList";

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: "",
    };

    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }

  onMarkerClick = (googleProps, marker, e, location) => {
    this.setState({
      selectedPlace: location,
      activeMarker: marker,
      showingInfoWindow: true
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

  // <div style={{ padding: "10px" }}>

  render() {
    return (
      <div style={{ height: "100vh", paddingLeft: "10px" }} className="ui grid">
        <div className="ten wide column">
          <Map
            google={this.props.google}
            onClick={this.onMapClicked}
            style={{ width: "100%", height: "90%", position: "relative" }}
            className={"map"}
            zoom={2}
          >
            {this.props.locations.map(location => (
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
            >
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
            </InfoWindow>
          </Map>
        </div>
        <div className="one wide column" />
        <div className="four wide column">
          {this.state.selectedPlace ? (
            <AttractionList
              setCity={this.props.setCity}
              cityName={this.state.selectedPlace.name}
              location={this.state.selectedPlace}
              key={this.state.selectedPlace.id}
            />
          ) : null}
        </div>
        <div className="one wide column" />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDTnFckTcPidqCa5F9dWom4H_0hbJu9Nh0"
})(MapContainer);
