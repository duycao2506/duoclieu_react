import DNavBar from './views/NavBar/DNavbar';


import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Home from './containers/Home/Home';
import About from './containers/Intro/About';
import Contact from './containers/Contact/Contact';
import Footer from './views/Footer/Footer';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { withRouter } from 'react-router';



// require('normalize.css/normalize.css');
require('../styles/App.css');


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
