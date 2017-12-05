import React from 'react';
import styles from './DSlides.css';
import DSlidesEle from 'components/views/DSlides/DSlidesEle/DSlidesEle';
import Carousel from 're-carousel';
import IndicatorDots from 'components/views/DSlides/Indicatordots';

class DSlides extends React.Component {
  constructor(props, context){
    super(props,context);

  }

  render(){
    return (
      <div  className='carHolder'>
        <Carousel loop widgets={[IndicatorDots]}>
          <DSlidesEle image='2.jpeg' >
          </DSlidesEle>
          <DSlidesEle image='3.jpeg' />
          <DSlidesEle image='2.jpeg' />
        </Carousel>
      </div>
    );
  }
}


DSlides.defaultProps = {
};

export default DSlides;
