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
import UserAccount from './pages/userAccount'
// import AttractionList from "./attractionList";

// this one needs to be on the bottom

class App extends React.Component {
  state = {
    auth: {
      loggedIn: false
    },
    city: "",
    locations: [],
    attractions: [],
    currentUser: ""
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      this.setState({
        auth: {
          loggedIn: true,
          token: token
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

  // setCurrentUser = user => {
  //   this.setState({
  //     currentUser: user
  //   })
  // };

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
    console.log("in the app login", username, password);
    api.login(username, password).then(j => {
      if (j.error) {
        alert(j.error);
      } else {
        localStorage.setItem("token", j.token);
        this.setState({
          currentUser: j.user,
          auth: {
            loggedIn: true,
            token: j.token
          }
        });
      }
    });
  }; // ENDS LOGIN

  logout = () => {
    localStorage.removeItem("token");
    this.setState({
      currentUser: '',
      auth: {
        loggedIn: false,
        token: undefined
      }
    })
  }; // ENDS LOG OUT

  render() {
    return (
      <div className="App">
        <NavBar logOut={this.logout} currentUser={this.state.currentUser}/>
        <Switch>
          <Route
            path="/locations/:name"
            render={routerParams => {
              return (
                <Location
                  location={this.findLocation(routerParams)}
                  findLocation={this.findLocation}
                />
              );
            }}
          />
          <Route
            path="/attractions/:name"
            render={routerParams => {
              return (
                <AttractionDetail
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
                currentUser={this.state.currentUser}
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
                setCity={this.setCity}
                currentUser={this.state.currentUser}
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
          <Route
            exact
            path="/makeTrip"
            render={props => (
              <MakeTrip
                {...props}
                currentUser={this.state.currentUser}
                currentCity={this.state.city}
              />
            )}
          />
          <Route
            exact
            path="/yourTrips"
            render={props => (
              <YourTrips {...props} currentUser={this.state.currentUser} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

// <Route exact path='/' component={Home}/>
// <Route exact path='/signup' data={this.state.currentUser} component={SignUp}/>
// <Route exact path='/firstSignUpPage' data={this.state.currentUser} component={FirstSignUpPage} />

export default App;
