
// THIS IS ALL THE GOOGLE MAPS STUFF RN

import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import React from "react";

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };

    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
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

  render() {
    return (
      <div>
        <Map google={this.props.google} onClick={this.onMapClicked} style={{width: '70%', height: '80%', position: 'relative'}} className={'map'} zoom={2}>
          <Marker onClick={this.onMarkerClick} name={"Current location"} />

          <Marker
          onClick={this.onMarkerClick}
          title={'The marker`s title will appear as a tooltip.'}
          name={'SOMA'}
          position={{lat: 37.778519, lng: -122.405640}} />

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
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDTnFckTcPidqCa5F9dWom4H_0hbJu9Nh0"
})(MapContainer);
