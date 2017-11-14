require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from 'components/containers/Home'
import About from 'components/containers/About'
import Topics from 'components/containers/Topics'


// let yeomanImage = require('../images/yeoman.png');


class AppComponent extends React.Component {
  render() {
    return (
      <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topics">Topics</Link></li>
        </ul>
  
        <hr/>
  
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/topics" component={Topics}/>
      </div>
    </Router>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
