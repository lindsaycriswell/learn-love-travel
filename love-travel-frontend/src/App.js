
// import react dependencies
import React from "react";
import { Switch, Route } from 'react-router-dom'

// import styling
import "./App.css";
import Image from "./images/sunrise-myanmar.jpg"

// components
import NavBar from "./navBar";

//route paths
import MapContainer from './MapContainer'
import About from './pages/about'
import Home from './pages/home'
import SignUp from './pages/signUp'
import FirstSignUpPage from './pages/firstSignUpPage'
import Welcome from './pages/welcome'




class App extends React.Component {
  state = {
    currentUser: ''
  }

  setCurrentUser = (user) => {
    this.setState({
      currentUser: user
    })
  }

  render() {

    return (
      <div className="App">
        <NavBar />
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/map' component={MapContainer}/>
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
        </Switch>
      </div>
    );
  }
}

// <Route exact path='/signup' data={this.state.currentUser} component={SignUp}/>
// <Route exact path='/firstSignUpPage' data={this.state.currentUser} component={FirstSignUpPage} />

export default App;
