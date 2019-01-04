require('normalize.css/normalize.css');
require('styles/App.css');

import DNavBar from 'components/views/NavBar/DNavBar'


import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Home from 'components/containers/Home/Home';
import About from 'components/containers/Intro/About';
import Contact from 'components/containers/Contact/Contact';
import Footer from 'components/views/Footer/Footer';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { withRouter } from 'react-router';


// let yeomanImage = require('../images/yeoman.png');


class AppComponent extends React.Component {
  render() {
    const Navbar = withRouter(DNavBar);
    return (
      <MuiThemeProvider>
        <Router>
          <div className="parent">
            <Navbar/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Footer/>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

AppComponent.defaultProps = {
};

export default (AppComponent);
