import React from 'react'
import DNavBar from 'components/views/DNavBar'
import theme from 'styles/AppBar.css';

class Home extends React.Component {
    render(){
        return (
            <div style={{backgroundColor: "#ffffff", overflow: 'visible'}}>
                <DNavBar theme={theme}/>
                <h2>Home</h2>
            </div>
        );
    }
}

Home.defaultProps = {
};

export default Home;