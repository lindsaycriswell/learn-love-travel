// import react dependencies
import React from "react";
import { Switch, Route } from "react-router-dom";
import api from "./service/api";

// import styling
import "./App.css";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

// components
import NavBar from "./navBar";

//route paths
import MapContainer from "./MapContainer";
import About from "./pages/about";
import Home from "./pages/home";
import SignUp from "./pages/signUp";
import FirstSignUpPage from "./pages/firstSignUpPage";
import Welcome from "./pages/welcome";
import MakeTrip from "./pages/makeTrip";
import Location from "./Location";
import YourTrips from "./pages/yourTrips";
import AttractionDetail from "./AttractionDetail";
import UserAccount from "./pages/userAccount";
// import AttractionList from "./attractionList";

// this one needs to be on the bottom

class App extends React.Component {
  state = {
    auth: {
      loggedIn: false,
      loggingIn: true,
    },
    city: "",
    locations: [],
    attractions: [],
    currentUser: ""
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      fetch('http://localhost:3000/currentuser', {
        method: 'POST',
        headers: {"Authorization": token}
      })
      .then(res => res.json())
      .then(json => {
        this.setState({
          auth: {
            loggedIn: true,
            token: token,
            loggingIn: false
          }
        })
      })
    } else {
      this.setState({
        auth: {
          loggedIn: false,
          loggingIn: false
        }
      });
    }

    fetch("http://localhost:3000/api/v1/locations")
      .then(res => res.json())
      .then(json =>
        this.setState({
          locations: json
        })
      );

    fetch("http://localhost:3000/api/v1/attractions")
      .then(res => res.json())
      .then(json =>
        this.setState({
          attractions: json
        })
      );
  } // ends COMPONENT DID MOUNT

  // sets what city you're on for the map to load the attractions
  setCity = cityData => {
    this.setState({
      city: cityData
    });
  };

  findLocation = routerParams => {
    return this.state.locations.find(function(location) {
      return location.url_name === routerParams.match.params.name;
    });
  };

  findAttraction = routerParams => {
    return this.state.attractions.find(function(attraction) {
      return attraction.url_name === routerParams.match.params.name;
    });
  };

  // TAKEN FROM LECTURE
  login = (username, password) => {
    api.login(username, password).then(j => {
      if (j.error) {
        alert(j.error);
        this.setState({
          loggedIn: false,
          loggingIn: false
        });
      } else {
        console.log('in the app login')
        localStorage.setItem("token", j.token);
        localStorage.setItem( 'user', JSON.stringify( j.user ) )
        this.setState(
          {
            currentUser: j.user,
            auth: {
              loggedIn: true,
              token: j.token,
              loggingIn: false
            }
          });
      }
    });
  }; // ENDS LOGIN

  logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.setState({
      currentUser: "",
      auth: {
        loggedIn: false,
        token: undefined
      }
    });
  }; // ENDS LOG OUT

  render() {

    let user = JSON.parse(localStorage.getItem("user"))

    return (
      <div className="App">
        <NavBar
          logOut={this.logout}
          currentUser={user}
          auth={this.state.auth}
        />
        <Switch>
          <Route
            path="/locations/:name"
            render={routerParams => {
              return (
                <Location
                  location={this.findLocation(routerParams)}
                  findLocation={this.findLocation}
                  auth={this.state.auth}
                  currentUser={user}
                  url={routerParams.match}
                />
              );
            }}
          />
          <Route
            path="/attractions/:name"
            render={routerParams => {
              return (
                <AttractionDetail
                  auth={this.state.auth}
                  attraction={this.findAttraction(routerParams)}
                />
              );
            }}
          />
          <Route
            path="/users/:id"
            render={props => (
              <UserAccount
                {...props}
                auth={this.state.auth}
                currentUser={user}
              />
            )}
          />
          <Route
            exact
            path="/"
            render={props => (
              <Home
                {...props}
                loginFn={this.login}
                logoutFn={this.logout}
                auth={this.state.auth}
              />
            )}
          />
          <Route
            exact
            path="/map"
            render={props => (
              <MapContainer
                {...props}
                auth={this.state.auth}
                setCity={this.setCity}
                currentUser={user}
                locations={this.state.locations}
              />
            )}
          />
          <Route exact path="/about" component={About} />
          <Route
            exact
            path="/signup"
            render={props => (
              <SignUp
                {...props}
                setCurrentUser={this.setCurrentUser}
                auth={this.state.auth}
                currentUser={user}
                login={this.login}
              />
            )}
          />
          <Route
            exact
            path="/firstSignUpPage"
            render={props => (
              <FirstSignUpPage
                {...props}
                auth={this.state.auth}
                currentUser={this.state.currentUser}
              />
            )}
          />
          <Route
            exact
            path="/welcome"
            render={props => (
              <Welcome
                {...props}
                auth={this.state.auth}
                currentUser={this.state.currentUser}
              />
            )}
          />
          <Route
            exact
            path="/makeTrip"
            render={props => (
              <MakeTrip
                {...props}
                auth={this.state.auth}
                currentUser={user}
                currentCity={this.state.city}
              />
            )}
          />
          <Route
            exact
            path="/yourTrips"
            render={props => (
              <YourTrips
                {...props}
                auth={this.state.auth}
                currentUser={user}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
