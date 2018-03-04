
// import react dependencies
import React from "react";
import { Switch, Route } from 'react-router-dom'


// import styling
import "./App.css";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

// components
import NavBar from "./navBar";

//route paths
import MapContainer from './MapContainer'
import About from './pages/about'
import Home from './pages/home'
import SignUp from './pages/signUp'
import FirstSignUpPage from './pages/firstSignUpPage'
import Welcome from './pages/welcome'
import MakeTrip from './pages/makeTrip'
import YourTrips from './pages/yourTrips'


class App extends React.Component {
  state = {
    currentUser: '',
    city: ''
  }

  setCurrentUser = (user) => {
    this.setState({
      currentUser: user
    })
  }

  setCity = (cityData) => {
    this.setState({
      city: cityData
    })
  }

  render() {

    return (
      <div className="App">
        <NavBar />
        <Switch>
            <Route exact path='/' render={props => (
                <Home {...props} currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser}/>
              )} />
            <Route exact path='/map' render={props => (
                <MapContainer {...props} setCity={this.setCity} currentUser={this.state.currentUser}/>
              )} />
            <Route exact path='/about' component={About}/>
            <Route exact path='/signup' render={props => (
                <SignUp {...props} currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser}/>
              )} />
            <Route exact path='/firstSignUpPage' render={props => (
                <FirstSignUpPage {...props} currentUser={this.state.currentUser} />
              )} />
            <Route exact path='/welcome' render={props => (
                <Welcome {...props} currentUser={this.state.currentUser} />
              )} />
            <Route exact path='/makeTrip' render={props => (
                <MakeTrip {...props} currentUser={this.state.currentUser} currentCity={this.state.city}/>
              )} />
            <Route exact path='/yourTrips' render={props => (
                <YourTrips {...props} currentUser={this.state.currentUser}/>
              )} />
        </Switch>
      </div>
    );
  }
}

// <Route exact path='/' component={Home}/>
// <Route exact path='/signup' data={this.state.currentUser} component={SignUp}/>
// <Route exact path='/firstSignUpPage' data={this.state.currentUser} component={FirstSignUpPage} />

export default App;
