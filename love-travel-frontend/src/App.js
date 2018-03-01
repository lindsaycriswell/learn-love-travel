import React, { Component } from "react";
import "./App.css";

import NavBar from "./navBar";

import Home from './home'
import MapContainer from './MapContainer'

import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/mainPage' component={MapContainer}/>
        </Switch>
      </div>
    );
  }
}

//   render() {
//     return (
//       <div className="App">
//         <div className="ui container">
//             <NavBar/>
//             <div className="ui divider"></div>
//             <MapContainer />
//         </div>
//       </div>
//     );
//   }
// }

export default App;
