import React from 'react';
import PropTypes from 'prop-types';
import {  Link } from 'react-router-dom';
require ('./DNavBar.css');
class DNavBar extends React.Component {
    constructor(props, context){
        super(props, context);
        this.showMenu = this.showMenu.bind(this);
        this.items = [];
    }
    render(){
        console.log(this.props.location);
        return (
            <div className="topnav" id="myTopnav" ref={(obj) => { this.myTopnav = obj}} >
                <Link to="/" className="navlogo"><img src='/images/logo.png'/></Link>
                <Link to="/" className="navbrand">Hiệp Thành Dược Hãng</Link>
                <Link to="/about" className={'navitem' + (this.props.location.pathname == '/about' ? '_selected' : '')} ref={(obj) => {this.items.push(obj)}} >Giới thiệu</Link>
                <Link to="/contact" className={'navitem' + (this.props.location.pathname == '/contact' ? '_selected' : '')} ref={(obj) => {this.items.push(obj)}} >Liên hệ</Link>
                <Link to="/" className={'navitem' + (this.props.location.pathname == '/' ? '_selected' : '')} ref={(obj) => {this.items.push(obj)}} >Trang chủ</Link>
                <Link to="#" className="navigator icon" onClick={this.showMenu()}>&#9776;</Link>
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