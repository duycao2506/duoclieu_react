import React from 'react'
import { AppBar } from 'react-toolbox/lib/app_bar';
import theme from './PurpleAppBar.css';
class DNavBar extends React.Component {
    constructor(props, context){
        super(props, context);
    }
    render(){
        let {...others} = this.props;
        return (
            <AppBar {...others} theme={theme}/>
        )
    }
}

DNavBar.defaultProps = {

};

export default DNavBar;