import React from 'react';
import styles from './DIntroCell.css';

class DIntroCell extends React.Component {
  constructor(props, context)
  {
    super(props, context);
  }

  render(){
    return (
      <div className="introCell">
        <div className='introImg'>
          <span className={'lnr '+ this.props.icon}></span>
          <div className='introImgOverlay'/>
          <img src = {this.props.image} />
          <div className='circleBack'></div>
        </div>
        <div className='introText'>
          <h3> {this.props.title} </h3>
          <p> {this.props.description} </p>
        </div>
      </div>
    );
  }
}

DIntroCell.defaultProps = {

}

export default DIntroCell;
