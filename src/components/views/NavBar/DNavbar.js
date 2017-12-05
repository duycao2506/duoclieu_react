import React from 'react'

import PropTypes from 'prop-types'
require ('./DNavBar.css');

class DNavBar extends React.Component {
    constructor(props, context){
        super(props, context);
        this.showMenu = this.showMenu.bind(this);
        this.items = [];
    }
    render(){
        console.log(this.props.location)
        return (
            <div className="topnav" id="myTopnav" ref={(obj) => { this.myTopnav = obj}} >
                <a href="/" className="navlogo"><img src="images/logo.ico"/></a>
                <a href="/about" className={'navitem' + (this.props.location.pathname == '/about' ? '_selected' : '')} ref={(obj) => {this.items.push(obj)}} >About</a>
                <a href="/contact" className={'navitem' + (this.props.location.pathname == '/contact' ? '_selected' : '')} ref={(obj) => {this.items.push(obj)}} >Contact</a>
                <a href="/" className={'navitem' + (this.props.location.pathname == '/' ? '_selected' : '')} ref={(obj) => {this.items.push(obj)}} >Home</a>
                <a href="#" className="navigator icon" onClick={this.showMenu()}>&#9776;</a>
            </div>
        )
    }

    showMenu(){
        if (this.myTopnav != undefined){
            if  (this.myTopnav.className === 'topnav') {
                this.myTopnav.className += ' responsive';
            } else {
                this.myTopnav.className = 'topnav';
            }
        } 
    }


}

DNavBar.defaultProps = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default DNavBar;