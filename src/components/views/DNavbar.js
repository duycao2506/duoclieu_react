import React from 'react'
require ('./DNavBar.css');

class DNavBar extends React.Component {
    constructor(props, context){
        super(props, context);
        this.myFunction = this.myFunction.bind(this);

    }
    render(){
        return (
            <div className="topnav" id="myTopnav" ref={(obj) => { this.myTopnav = obj}} >
                <a href="#home" className="active">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
                <a href="#" className="icon" onClick={this.myFunction()}>&#9776;</a>
            </div>
        )
    }

    myFunction(){
        console.log(this.myTopnav);
        if (this.myTopnav != undefined){
            if( this.myTopnav.className === 'topnav') {
            this.myTopnav.className += ' responsive';
        } else {
            this.myTopnav.className = 'topnav';
        }
        } 

    }

}

DNavBar.defaultProps = {

};

export default DNavBar;