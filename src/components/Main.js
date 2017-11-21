require('normalize.css/normalize.css');
require('styles/App.css');
import DNavBar from 'components/views/DNavBar'
import theme from 'styles/AppBar.css';

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter
} from 'react-router-dom'
import Home from 'components/containers/Home'
import About from 'components/containers/About'
import Topics from 'components/containers/Topics'


// let yeomanImage = require('../images/yeoman.png');


class AppComponent extends React.Component {
  render() {
    return (
      
      <BrowserRouter>
      <div>
        <DNavBar/>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/topics" component={Topics}/>
      </div>
    </BrowserRouter>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
