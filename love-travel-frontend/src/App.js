
// import react dependencies
import React from "react";
import { Switch, Route } from 'react-router-dom'

// import styling
import "./App.css";

// import components
import NavBar from "./navBar";
import MapContainer from './MapContainer'
import About from './pages/about'
import Home from './pages/home'

import Image from "./images/sunrise-myanmar.jpg"

// let sectionStyle = {
//   margin: 0,
//   width: "100%",
//   height: "800px",
//   backgroundImage: `url(${Image})`
// };
//
//  style={sectionStyle}

class App extends React.Component {

  render() {

    return (
      <div className="App">
        <NavBar />
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/map' component={MapContainer}/>
            <Route exact path='/about' component={About}/>
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
