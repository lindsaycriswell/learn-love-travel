import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';




import { BrowserRouter } from 'react-router-dom'
  ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('root'))


// <Route path="/" component={Home} />
// <Route exact path="/mainPage" component={MapContainer}/>
// </div>
