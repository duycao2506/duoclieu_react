require('normalize.css/normalize.css');
require('styles/App.css');

import DNavBar from 'components/views/NavBar/DNavBar'
import theme from 'styles/AppBar.css';


import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from 'components/containers/Home/Home';
import About from 'components/containers/About';
import Contact from 'components/containers/Contact/Contact';
import Footer from 'components/views/Footer/Footer';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';


// let yeomanImage = require('../images/yeoman.png');


class AppComponent extends React.Component {
  render() {
    const Navbar = withRouter(DNavBar);
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <Navbar/>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
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
