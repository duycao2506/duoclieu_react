import React from 'react'
require ('./DNavBar.css');

class DNavBar extends React.Component {
    constructor(props, context){
        super(props, context);
        this.showMenu = this.showMenu.bind(this);
        this.itemClick = this.itemClick.bind(this);
        this.items = [];
    }
    render(){
        return (
            <div className="topnav" id="myTopnav" ref={(obj) => { this.myTopnav = obj}} >
                <a href="/" className="navlogo"><img src="images/logo.ico"/></a>
                <a href="/" className="navitem" ref={(obj) => {this.items.push(obj)}} onClick={this.itemClick(event)}>Home</a>
                <a href="/contact" className="navitem" ref={(obj) => {this.items.push(obj)}}  onClick={this.itemClick(event)}>Contact</a>
                <a href="/about" className="navitem" ref={(obj) => {this.items.push(obj)}} onClick={this.itemClick(event)}>About</a>
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

    itemClick(e){
        alert(e);
    }

}

DNavBar.defaultProps = {

};

export default DNavBar;