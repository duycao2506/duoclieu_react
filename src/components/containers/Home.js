import React from 'react'
import DSlides from 'components/views/DSlides/DSlides'

class Home extends React.Component {
    render(){
        return (
            <div>
                <DSlides/>
            </div>
        );
    }
}

Home.defaultProps = {
    
};

export default Home;