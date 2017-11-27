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
          <img src = {this.props.image} />
        </div>
        <div className='introText'>
          <h1> Hello </h1>
          <p> dsadsadsa </p>
        </div>
      </div>
    );
  }
}

DIntroCell.defaultProps = {

}

export default DIntroCell;
