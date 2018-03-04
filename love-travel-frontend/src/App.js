// import react dependencies
import React from "react";
import { Switch, Route } from "react-router-dom";

// import styling
import "./App.css";
// import Image from "./images/sunrise-myanmar.jpg"

// components
import NavBar from "./navBar";

//route paths
import MapContainer from "./MapContainer";
import About from "./pages/about";
import Home from "./pages/home";
import SignUp from "./pages/signUp";
import FirstSignUpPage from "./pages/firstSignUpPage";
import Welcome from "./pages/welcome";
import Location from "./Location";
// import AttractionList from "./attractionList";

class App extends React.Component {
  state = {
    currentUser: "",
    locations: []
  };

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/locations")
      .then(res => res.json())
      .then(json =>
        this.setState({
          locations: json
        })
      );
  }

  setCurrentUser = user => {
    this.setState({
      currentUser: user
    });
  };

  findByName = routerParams => {
    return this.state.locations.find(function(location) {
      return location.url_name === routerParams.match.params.name;
    });
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route
            path="/locations/:name"
            render={routerParams => {
              return <Location location={this.findByName(routerParams)} />;
            }}
          />
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/map"
            render={() => <MapContainer locations={this.state.locations} />}
          />
          <Route exact path="/about" component={About} />
          <Route
            exact
            path="/signup"
            render={props => (
              <SignUp
                {...props}
                currentUser={this.state.currentUser}
                setCurrentUser={this.setCurrentUser}
              />
            )}
          />
          <Route
            exact
            path="/firstSignUpPage"
            render={props => (
              <FirstSignUpPage
                {...props}
                currentUser={this.state.currentUser}
              />
            )}
          />
          <Route
            exact
            path="/welcome"
            render={props => (
              <Welcome {...props} currentUser={this.state.currentUser} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

// <Route exact path='/signup' data={this.state.currentUser} component={SignUp}/>
// <Route exact path='/firstSignUpPage' data={this.state.currentUser} component={FirstSignUpPage} />

export default App;
