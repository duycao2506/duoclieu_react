import React from 'react'
import DSlides from 'components/views/DSlides/DSlides'
import DIntroCell from 'components/views/DIntroCell/DIntroCell'
import styles from './Home.css';
class Home extends React.Component {
    render(){
        return (
            <div>
                <DSlides/>
                <div className='introHolder'>
                    <DIntroCell image='images/4.jpeg'/>
                    <DIntroCell image='images/5.jpeg'/>
                    <DIntroCell image='images/6.jpeg'/>
                </div>
            </div>
        );
    }
}

Home.defaultProps = {
    
};

export default Home;