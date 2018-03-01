import React, { Component } from 'react';
import './App.css';
// import YourComponent from './mapComponents/test-component'
import MapContainer from './MapContainer'
import NavBar from './navBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="ui container">
            <NavBar/>
            <div className="ui divider"></div>
            <MapContainer />
        </div>
      </div>
    );
  }
}

export default App;
