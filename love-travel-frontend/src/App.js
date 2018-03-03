
// import react dependencies
import React from "react";
import { Switch, Route } from 'react-router-dom'

// import styling
import "./App.css";

// components
import NavBar from "./navBar";

//route paths
import MapContainer from './MapContainer'
import About from './pages/about'
import Home from './pages/home'
import SignUp from './pages/signUp'



import Image from "./images/sunrise-myanmar.jpg"


class App extends React.Component {

  render() {

    return (
      <div className="App">
        <NavBar />
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/map' component={MapContainer}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/signup' component={SignUp}/>
        </Switch>
      </div>
    );
  }
}


export default App;
